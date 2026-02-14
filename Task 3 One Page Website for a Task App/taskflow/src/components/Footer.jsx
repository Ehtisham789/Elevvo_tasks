import { Twitter, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h4 className="text-lg font-semibold mb-4">TaskFlow</h4>
        <div className="flex justify-center space-x-6 mb-4">
          <Twitter className="hover:text-white cursor-pointer" />
          <Github className="hover:text-white cursor-pointer" />
          <Mail className="hover:text-white cursor-pointer" />
        </div>
        <p className="text-sm">© 2026 TaskFlow. All rights reserved.</p>
      </div>
    </footer>
  );
}
