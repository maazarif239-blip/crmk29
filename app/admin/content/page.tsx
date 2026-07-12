'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

type FAQ = { question: string; answer: string };
type TeamMember = { name: string; role: string; description: string };

export default function ContentPage() {
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  // About Page
  const [aboutPara1, setAboutPara1] = useState('');
  const [aboutPara2, setAboutPara2] = useState('');
  const [aboutSaving, setAboutSaving] = useState(false);

  // FAQs
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [faqsSaving, setFaqsSaving] = useState(false);

  // Management Team
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [teamSaving, setTeamSaving] = useState(false);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    // Fetch About Page
    const { data: aboutData } = await supabase
      .from('site_content')
      .select('value')
      .eq('key', 'about_page')
      .single();
    
    if (aboutData?.value) {
      setAboutPara1(aboutData.value.paragraph1 || '');
      setAboutPara2(aboutData.value.paragraph2 || '');
    }

    // Fetch FAQs
    const { data: faqsData } = await supabase
      .from('site_content')
      .select('value')
      .eq('key', 'faqs')
      .single();
    
    if (faqsData?.value && Array.isArray(faqsData.value)) {
      setFaqs(faqsData.value);
    } else {
      setFaqs([]);
    }

    // Fetch Management Team
    const { data: teamData } = await supabase
      .from('site_content')
      .select('value')
      .eq('key', 'management_team')
      .single();
    
    if (teamData?.value && Array.isArray(teamData.value)) {
      setTeam(teamData.value);
    } else {
      setTeam([]);
    }

    setLoading(false);
  };

  const saveAbout = async () => {
    setAboutSaving(true);
    const { error } = await supabase
      .from('site_content')
      .upsert(
        { 
          key: 'about_page', 
          value: { 
            paragraph1: aboutPara1, 
            paragraph2: aboutPara2 
          } 
        },
        { onConflict: 'key' }
      );
    
    if (error) {
      alert('Error saving: ' + error.message);
    } else {
      alert('About page saved!');
    }
    setAboutSaving(false);
  };

  const saveFaqs = async () => {
    setFaqsSaving(true);
    const { error } = await supabase
      .from('site_content')
      .upsert(
        { key: 'faqs', value: faqs },
        { onConflict: 'key' }
      );
    
    if (error) {
      alert('Error saving: ' + error.message);
    } else {
      alert('FAQs saved!');
    }
    setFaqsSaving(false);
  };

  const saveTeam = async () => {
    setTeamSaving(true);
    const { error } = await supabase
      .from('site_content')
      .upsert(
        { key: 'management_team', value: team },
        { onConflict: 'key' }
      );
    
    if (error) {
      alert('Error saving: ' + error.message);
    } else {
      alert('Management team saved!');
    }
    setTeamSaving(false);
  };

  const addFaq = () => {
    setFaqs([...faqs, { question: '', answer: '' }]);
  };

  const deleteFaq = (index: number) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const updateFaq = (index: number, field: 'question' | 'answer', value: string) => {
    const updated = [...faqs];
    updated[index][field] = value;
    setFaqs(updated);
  };

  const addTeamMember = () => {
    setTeam([...team, { name: '', role: '', description: '' }]);
  };

  const deleteTeamMember = (index: number) => {
    setTeam(team.filter((_, i) => i !== index));
  };

  const updateTeamMember = (index: number, field: 'name' | 'role' | 'description', value: string) => {
    const updated = [...team];
    updated[index][field] = value;
    setTeam(updated);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Content Management</h1>

      {/* About Page Section */}
      <section style={{ marginTop: 40, marginBottom: 60, borderBottom: '2px solid #ddd', paddingBottom: 40 }}>
        <h2 style={{ fontSize: 20, marginBottom: 20, fontWeight: 'bold' }}>About Page</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 15, maxWidth: 800 }}>
          <div>
            <label style={{ display: 'block', marginBottom: 5, fontWeight: 'bold', fontSize: 13 }}>
              Paragraph 1
            </label>
            <textarea
              value={aboutPara1}
              onChange={(e) => setAboutPara1(e.target.value)}
              style={{ width: '100%', minHeight: 100, padding: 10, fontFamily: 'inherit' }}
              placeholder="First paragraph of About page..."
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: 5, fontWeight: 'bold', fontSize: 13 }}>
              Paragraph 2
            </label>
            <textarea
              value={aboutPara2}
              onChange={(e) => setAboutPara2(e.target.value)}
              style={{ width: '100%', minHeight: 100, padding: 10, fontFamily: 'inherit' }}
              placeholder="Second paragraph of About page..."
            />
          </div>
          <button
            onClick={saveAbout}
            disabled={aboutSaving}
            style={{ padding: '10px 20px', alignSelf: 'flex-start', fontWeight: 'bold' }}
          >
            {aboutSaving ? 'Saving...' : 'Save About'}
          </button>
        </div>
      </section>

      {/* FAQs Section */}
      <section style={{ marginBottom: 60, borderBottom: '2px solid #ddd', paddingBottom: 40 }}>
        <h2 style={{ fontSize: 20, marginBottom: 20, fontWeight: 'bold' }}>FAQs</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{ border: '1px solid #ddd', padding: 15, borderRadius: 4 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <strong>FAQ #{index + 1}</strong>
                <button onClick={() => deleteFaq(index)} style={{ color: 'red', padding: '4px 8px' }}>
                  Delete
                </button>
              </div>
              <input
                placeholder="Question"
                value={faq.question}
                onChange={(e) => updateFaq(index, 'question', e.target.value)}
                style={{ width: '100%', padding: 8, marginBottom: 10 }}
              />
              <textarea
                placeholder="Answer"
                value={faq.answer}
                onChange={(e) => updateFaq(index, 'answer', e.target.value)}
                style={{ width: '100%', minHeight: 80, padding: 8 }}
              />
            </div>
          ))}
          <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={addFaq} style={{ padding: '8px 16px' }}>
              + Add FAQ
            </button>
            <button
              onClick={saveFaqs}
              disabled={faqsSaving}
              style={{ padding: '8px 20px', fontWeight: 'bold', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}
            >
              {faqsSaving ? 'Saving...' : 'Save FAQs'}
            </button>
          </div>
        </div>
      </section>

      {/* Management Team Section */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 20, marginBottom: 20, fontWeight: 'bold' }}>Management Team</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {team.map((member, index) => (
            <div key={index} style={{ border: '1px solid #ddd', padding: 15, borderRadius: 4 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <strong>Team Member #{index + 1}</strong>
                <button onClick={() => deleteTeamMember(index)} style={{ color: 'red', padding: '4px 8px' }}>
                  Delete
                </button>
              </div>
              <input
                placeholder="Name"
                value={member.name}
                onChange={(e) => updateTeamMember(index, 'name', e.target.value)}
                style={{ width: '100%', padding: 8, marginBottom: 10 }}
              />
              <input
                placeholder="Role/Title"
                value={member.role}
                onChange={(e) => updateTeamMember(index, 'role', e.target.value)}
                style={{ width: '100%', padding: 8, marginBottom: 10 }}
              />
              <textarea
                placeholder="Description"
                value={member.description}
                onChange={(e) => updateTeamMember(index, 'description', e.target.value)}
                style={{ width: '100%', minHeight: 80, padding: 8 }}
              />
            </div>
          ))}
          <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={addTeamMember} style={{ padding: '8px 16px' }}>
              + Add Team Member
            </button>
            <button
              onClick={saveTeam}
              disabled={teamSaving}
              style={{ padding: '8px 20px', fontWeight: 'bold', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}
            >
              {teamSaving ? 'Saving...' : 'Save Team'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
