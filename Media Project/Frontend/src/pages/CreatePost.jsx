import { useState } from 'react';

const CreatePost = () => {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = (e) => {
    if (e.type === 'reset') {
      setPreview(null);
    }
  };

  return (
    <section className="min-h-screen bg-white py-6 md:py-12">
      <div className="w-full max-w-lg mx-auto px-5 sm:px-6">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Create Post</h1>
          <p className="text-gray-600 text-sm mt-1">Share your moment</p>
        </div>

        {/* Form */}
        <form className="space-y-5" onReset={handleReset}>
          <div>
            {preview ? (
              <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-48 sm:h-64 md:h-80 object-cover"
                />
                <label className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                  <span className="text-white font-medium text-sm sm:text-base">Change Image</span>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    required
                  />
                </label>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center w-full h-40 sm:h-48 md:h-56 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                <div className="flex flex-col items-center justify-center py-6 sm:py-8">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-sm sm:text-base font-medium text-gray-700">Upload image</p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                </div>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  required
                />
              </label>
            )}
          </div>
          <div>
            <label htmlFor="caption" className="block text-sm font-medium text-gray-700 mb-2">
              Caption
            </label>
            <textarea
              id="caption"
              name="caption"
              placeholder="What's on your mind?"
              className="w-full h-20 sm:h-24 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none bg-white text-sm sm:text-base"
              required
            />
          </div>
          <div className="flex gap-3 pt-3">
            <button
              type="submit"
              className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 rounded-lg transition-colors duration-200 text-sm sm:text-base"
            >
              Post
            </button>
            <button
              type="reset"
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 rounded-lg transition-colors duration-200 text-sm sm:text-base"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;