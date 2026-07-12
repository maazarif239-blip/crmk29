'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

type Review = { 
  id: string; 
  name: string; 
  label: string; 
  review_text: string; 
  rating: number; 
  published: boolean; 
  sort_order: number 
};

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState('');
  const [label, setLabel] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);
  const [published, setPublished] = useState(true);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const supabase = createClient();

  const fetchReviews = async () => {
    const { data } = await supabase.from('reviews').select('*').order('sort_order');
    setReviews(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchReviews(); }, []);

  const startEdit = (review: Review) => {
    setEditingId(review.id);
    setName(review.name);
    setLabel(review.label);
    setReviewText(review.review_text);
    setRating(review.rating);
    setPublished(review.published);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setName(''); 
    setLabel(''); 
    setReviewText(''); 
    setRating(5); 
    setPublished(true);
  };

  const saveReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !label || !reviewText) { 
      alert('Name, label, and review text are required'); 
      return; 
    }

    if (editingId) {
      const { error } = await supabase.from('reviews').update({ 
        name, 
        label, 
        review_text: reviewText, 
        rating, 
        published 
      }).eq('id', editingId);
      if (error) { alert(error.message); return; }
      cancelEdit();
      fetchReviews();
    } else {
      const { error } = await supabase.from('reviews').insert({ 
        name, 
        label, 
        review_text: reviewText, 
        rating, 
        published 
      });
      if (error) { alert(error.message); return; }
      cancelEdit();
      fetchReviews();
    }
  };

  const deleteReview = async (id: string) => {
    if (!confirm('Delete this review?')) return;
    await supabase.from('reviews').delete().eq('id', id);
    fetchReviews();
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Reviews / Testimonials</h1>
      
      <form onSubmit={saveReview} style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 600, margin: '20px 0' }}>
        <input 
          placeholder="Name (e.g. Anees Khan)" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          style={{ padding: 8 }} 
        />
        <input 
          placeholder="Label (e.g. Google Review · 4 months ago)" 
          value={label} 
          onChange={(e) => setLabel(e.target.value)} 
          style={{ padding: 8 }} 
        />
        <textarea 
          placeholder="Review text..." 
          value={reviewText} 
          onChange={(e) => setReviewText(e.target.value)} 
          style={{ padding: 8, minHeight: 100 }} 
        />
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <label>Rating:</label>
          <select value={rating} onChange={(e) => setRating(Number(e.target.value))} style={{ padding: 8 }}>
            <option value={1}>1 Star</option>
            <option value={2}>2 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={5}>5 Stars</option>
          </select>
          <label style={{ marginLeft: 20 }}>
            <input 
              type="checkbox" 
              checked={published} 
              onChange={(e) => setPublished(e.target.checked)} 
              style={{ marginRight: 5 }}
            />
            Published
          </label>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button type="submit" style={{ padding: '8px 16px' }}>
            {editingId ? 'Update' : 'Add Review'}
          </button>
          {editingId && (
            <button type="button" onClick={cancelEdit} style={{ padding: '8px 16px' }}>Cancel</button>
          )}
        </div>
      </form>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 30 }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>
            <th>Name</th>
            <th>Label</th>
            <th>Rating</th>
            <th>Published</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((r) => (
            <tr key={r.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '8px 0' }}>{r.name}</td>
              <td>{r.label}</td>
              <td>{r.rating} ⭐</td>
              <td>{r.published ? '✅ Yes' : '❌ No'}</td>
              <td>
                <button onClick={() => startEdit(r)} style={{ marginRight: 8 }}>Edit</button>
                <button onClick={() => deleteReview(r.id)} style={{ color: 'red' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
