// components/layout/Footer.tsx
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col sm:flex-row justify-between">
        <div>
          <div className="font-semibold text-gray-800">ALXListing</div>
          <div className="mt-2">© {new Date().getFullYear()} ALXListing. All rights reserved.</div>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-4">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Help</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
