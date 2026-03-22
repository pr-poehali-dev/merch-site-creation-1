
CREATE TABLE t_p38669857_merch_site_creation_.products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL,
  image_url TEXT,
  colors JSONB NOT NULL DEFAULT '[]',
  sizes JSONB NOT NULL DEFAULT '[]',
  tag VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);
