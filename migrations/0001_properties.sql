CREATE TABLE IF NOT EXISTS properties (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  listing_type TEXT NOT NULL CHECK (listing_type IN ('rent', 'sale')),
  property_type TEXT NOT NULL,
  price REAL NOT NULL,
  price_period TEXT,
  currency TEXT NOT NULL DEFAULT 'FCFA',
  location TEXT NOT NULL,
  bedrooms INTEGER,
  bathrooms INTEGER,
  size_sqm REAL,
  description TEXT NOT NULL,
  features TEXT NOT NULL DEFAULT '[]',
  images TEXT NOT NULL DEFAULT '[]',
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_properties_status ON properties (status);
