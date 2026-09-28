CREATE TABLE IF NOT EXISTS academic_posts (
  id TEXT PRIMARY KEY,
  department TEXT NOT NULL CHECK (department IN ('internships', 'report-writing', 'tutoring')),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  images TEXT NOT NULL DEFAULT '[]',
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_academic_posts_status ON academic_posts (status);
CREATE INDEX IF NOT EXISTS idx_academic_posts_department ON academic_posts (department);
