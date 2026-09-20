CREATE TABLE IF NOT EXISTS engineering_projects (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  domain TEXT NOT NULL CHECK (domain IN ('civil', 'mechanical', 'electrical', 'computer')),
  location TEXT,
  client TEXT,
  completed_on TEXT,
  scope TEXT NOT NULL,
  description TEXT NOT NULL,
  capabilities TEXT NOT NULL DEFAULT '[]',
  images TEXT NOT NULL DEFAULT '[]',
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_engineering_projects_status ON engineering_projects (status);
CREATE INDEX IF NOT EXISTS idx_engineering_projects_domain ON engineering_projects (domain);
