import React from 'react';
import { Button } from '../ui/Button';

export function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-subtle">
      <div className="max-w-container mx-auto px-4 md:px-8 py-16">
        {/* CTA Section */}
        <div className="text-center mb-16 py-16 border-b border-border-subtle">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Ready to build the future?
          </h2>
          <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
            Start building with Shopify today and join millions of merchants worldwide.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="primary" size="lg">
              Start free trial
            </Button>
            <Button variant="secondary" size="lg">
              Talk to sales
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-text-primary font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-text-muted hover:text-text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-text-primary transition-colors">
                  Enterprise
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-text-primary font-semibold mb-4">Developers</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-text-muted hover:text-text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-text-primary transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-text-primary transition-colors">
                  SDKs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-text-primary font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-text-muted hover:text-text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-text-primary transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-text-primary font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-text-muted hover:text-text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-text-primary transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border-subtle">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Shopify. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-text-muted hover:text-text-primary transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-text-muted hover:text-text-primary transition-colors text-sm">
              Terms
            </a>
            <a href="#" className="text-text-muted hover:text-text-primary transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
