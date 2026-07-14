'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { FileText } from 'lucide-react';

export default function AboutPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [aboutPara1, setAboutPara1] = useState('');
  const [aboutPara2, setAboutPara2] = useState('');
  const supabase = createClient();

  useEffect(() => {
    fetchAbout();
  }, []);

  const fetchAbout = async () => {
    const { data: aboutData } = await supabase
      .from('site_content')
      .select('value')
      .eq('key', 'about_page')
      .single();
    
    if (aboutData?.value) {
      setAboutPara1(aboutData.value.paragraph1 || '');
      setAboutPara2(aboutData.value.paragraph2 || '');
    }

    setLoading(false);
  };

  const saveAbout = async () => {
    // Validation
    if (!aboutPara1.trim() || !aboutPara2.trim()) {
      alert('Both paragraphs are required');
      return;
    }

    setSaving(true);
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
      alert('About page saved successfully!');
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">About Page Content</h1>
        <p className="text-gray-600">Edit the founder story paragraphs displayed on the About page</p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-4xl">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Paragraph 1 <span className="text-red-500">*</span>
            </label>
            <textarea
              value={aboutPara1}
              onChange={(e) => setAboutPara1(e.target.value)}
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent"
              placeholder="First paragraph about the company's founding..."
            />
            <p className="text-xs text-gray-500 mt-1">
              Main founder story paragraph
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Paragraph 2 <span className="text-red-500">*</span>
            </label>
            <textarea
              value={aboutPara2}
              onChange={(e) => setAboutPara2(e.target.value)}
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent"
              placeholder="Second paragraph about the company's approach..."
            />
            <p className="text-xs text-gray-500 mt-1">
              Company approach and philosophy
            </p>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={saveAbout}
            disabled={saving}
            className="bg-[#EB5324] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#d4481f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            {saving ? 'Saving...' : 'Save About Page'}
          </button>
        </div>
      </div>

      {/* Info Card */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-4xl">
        <div className="flex gap-3">
          <div className="text-blue-600 mt-0.5">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm text-blue-900 font-medium mb-1">About This Page</p>
            <p className="text-xs text-blue-800 leading-relaxed">
              These paragraphs appear in the "A Legacy of Craftsmanship" section on the About page. 
              They tell the story of HB Furniture's founding and approach to business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
