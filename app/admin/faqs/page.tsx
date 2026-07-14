'use client';
import { useEffect, useState, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';
import { HelpCircle, Trash2, Plus } from 'lucide-react';

type FAQ = {
  question: string;
  answer: string;
  pages: string[];
};

export default function FAQsPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const fetchFaqs = useCallback(async () => {
    const supabase = createClient();
    const { data: faqsData } = await supabase
      .from('site_content')
      .select('value')
      .eq('key', 'faqs')
      .single();

    if (faqsData?.value && Array.isArray(faqsData.value)) {
      const transformedFaqs = faqsData.value.map((faq: any) => {
        if (faq.pages) return faq;
        return { question: faq.question, answer: faq.answer, pages: ['field_of_expertise'] };
      });
      setFaqs(transformedFaqs);
    } else {
      setFaqs([]);
    }
    setLoading(false);
  }, []);

  useEffect(() => { fetchFaqs(); }, [fetchFaqs]);

  const addFaq = () => {
    setFaqs([...faqs, { question: '', answer: '', pages: [] }]);
  };

  const deleteFaq = (index: number) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const updateFaq = (index: number, field: 'question' | 'answer', value: string) => {
    const updated = [...faqs];
    updated[index][field] = value;
    setFaqs(updated);
  };

  const togglePage = (index: number, page: 'home' | 'field_of_expertise') => {
    const updated = [...faqs];
    if (updated[index].pages.includes(page)) {
      updated[index].pages = updated[index].pages.filter((p) => p !== page);
    } else {
      updated[index].pages = [...updated[index].pages, page];
    }
    setFaqs(updated);
  };

  const saveFaqs = async () => {
    const invalidFaqs = faqs.filter((faq) => faq.pages.length === 0);
    if (invalidFaqs.length > 0) {
      setError('Each FAQ must be assigned to at least one page (Homepage or Field of Expertise)');
      return;
    }
    const emptyFaqs = faqs.filter((faq) => !faq.question.trim() || !faq.answer.trim());
    if (emptyFaqs.length > 0) {
      setError('All FAQs must have both question and answer filled in');
      return;
    }

    setError('');
    setSaving(true);
    const supabase = createClient();
    const { error: saveError } = await supabase
      .from('site_content')
      .upsert({ key: 'faqs', value: faqs }, { onConflict: 'key' });

    if (saveError) {
      setError('Error saving: ' + saveError.message);
    } else {
      alert('FAQs saved successfully!');
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Loading FAQs...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">FAQs Management</h1>
          <p className="text-gray-600">Manage frequently asked questions for different pages</p>
        </div>
        <button
          onClick={addFaq}
          className="flex items-center gap-2 bg-[#EB5324] text-white px-4 py-2 rounded-lg hover:bg-[#d4481f] transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add FAQ
        </button>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">{error}</div>
      )}

      <div className="space-y-4 mb-6">
        {faqs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
            <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 mb-4">No FAQs yet. Click &quot;Add FAQ&quot; to create one.</p>
          </div>
        ) : (
          faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">FAQ #{index + 1}</h3>
                <button
                  onClick={() => deleteFaq(index)}
                  className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Question</label>
                  <input
                    type="text"
                    placeholder="Enter question..."
                    value={faq.question}
                    onChange={(e) => updateFaq(index, 'question', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Answer</label>
                  <textarea
                    placeholder="Enter answer..."
                    value={faq.answer}
                    onChange={(e) => updateFaq(index, 'answer', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Show on Pages (select at least one)
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={faq.pages.includes('home')}
                        onChange={() => togglePage(index, 'home')}
                        className="w-4 h-4 text-[#EB5324] border-gray-300 rounded focus:ring-[#EB5324]"
                      />
                      <span className="text-sm text-gray-700">Homepage</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={faq.pages.includes('field_of_expertise')}
                        onChange={() => togglePage(index, 'field_of_expertise')}
                        className="w-4 h-4 text-[#EB5324] border-gray-300 rounded focus:ring-[#EB5324]"
                      />
                      <span className="text-sm text-gray-700">Field of Expertise</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {faqs.length > 0 && (
        <div className="flex justify-end">
          <button
            onClick={saveFaqs}
            disabled={saving}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? 'Saving...' : 'Save All FAQs'}
          </button>
        </div>
      )}
    </div>
  );
}
