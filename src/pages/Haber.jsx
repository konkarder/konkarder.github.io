export default function Haber({ title, url, fallbackText }) {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        {title}
      </h1>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 bg-blue-50 text-blue-800 text-sm text-center border-b border-blue-100">
          Sayfa görüntülenemiyorsa <a href={url} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-900">buraya tıklayarak</a> {fallbackText} ziyaret edebilirsiniz.
        </div>
        <div className="w-full h-[800px]">
          <iframe 
            src={url} 
            title={title}
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}