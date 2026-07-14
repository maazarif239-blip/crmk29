'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Users, Trash2, Plus, Upload } from 'lucide-react';

type TeamMember = { 
  name: string; 
  role: string; 
  description: string;
  image_url?: string;
};

export default function TeamPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingIndex, setUploadingIndex] = useState<number | null>(null);
  const supabase = createClient();

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
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

  const addTeamMember = () => {
    setTeam([...team, { name: '', role: '', description: '', image_url: '' }]);
  };

  const deleteTeamMember = (index: number) => {
    setTeam(team.filter((_, i) => i !== index));
  };

  const updateTeamMember = (index: number, field: keyof TeamMember, value: string) => {
    const updated = [...team];
    updated[index][field] = value;
    setTeam(updated);
  };

  const handleImageUpload = async (index: number, file: File) => {
    setUploadingIndex(index);
    
    const fileName = `team-${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage
      .from('product-images')
      .upload(fileName, file);
    
    if (uploadError) {
      alert('Image upload failed: ' + uploadError.message);
      setUploadingIndex(null);
      return;
    }

    const { data: urlData } = supabase.storage
      .from('product-images')
      .getPublicUrl(fileName);

    const updated = [...team];
    updated[index].image_url = urlData.publicUrl;
    setTeam(updated);
    setUploadingIndex(null);
  };

  const saveTeam = async () => {
    // Validation: name is required
    const invalidMembers = team.filter(member => !member.name.trim());
    if (invalidMembers.length > 0) {
      alert('All team members must have a name');
      return;
    }

    setSaving(true);
    const { error } = await supabase
      .from('site_content')
      .upsert(
        { key: 'management_team', value: team },
        { onConflict: 'key' }
      );
    
    if (error) {
      alert('Error saving: ' + error.message);
    } else {
      alert('Team saved successfully!');
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Loading team members...</p>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Management & Employees</h1>
          <p className="text-gray-600">Manage team members with photos, roles, and descriptions</p>
        </div>
        <button
          onClick={addTeamMember}
          className="flex items-center gap-2 bg-[#EB5324] text-white px-4 py-2 rounded-lg hover:bg-[#d4481f] transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Team Member
        </button>
      </div>

      {/* Team Members List */}
      <div className="space-y-6 mb-6">
        {team.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
            <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 mb-4">No team members yet. Click "Add Team Member" to create one.</p>
          </div>
        ) : (
          team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-gray-900">Team Member #{index + 1}</h3>
                <button
                  onClick={() => deleteTeamMember(index)}
                  className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column - Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Photo (optional)
                  </label>
                  <div className="flex flex-col gap-3">
                    {member.image_url ? (
                      <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-gray-200">
                        <img 
                          src={member.image_url} 
                          alt={member.name || 'Team member'}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-full aspect-square rounded-lg bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300">
                        <Users className="w-16 h-16 text-gray-300" />
                      </div>
                    )}
                    <label className="cursor-pointer">
                      <div className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors">
                        <Upload className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {uploadingIndex === index ? 'Uploading...' : 'Upload Photo'}
                        </span>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload(index, file);
                        }}
                        disabled={uploadingIndex === index}
                      />
                    </label>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter name..."
                      value={member.name}
                      onChange={(e) => updateTeamMember(index, 'name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Role/Title
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., CEO, Manager, Director..."
                      value={member.role}
                      onChange={(e) => updateTeamMember(index, 'role', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      placeholder="Brief description of their role..."
                      value={member.description}
                      onChange={(e) => updateTeamMember(index, 'description', e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Save Button */}
      {team.length > 0 && (
        <div className="flex justify-end">
          <button
            onClick={saveTeam}
            disabled={saving}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? 'Saving...' : 'Save Team'}
          </button>
        </div>
      )}
    </div>
  );
}
