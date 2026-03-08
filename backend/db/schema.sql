CREATE TABLE IF NOT EXISTS location (
    location_id INTEGER PRIMARY KEY AUTOINCREMENT,
    building_name TEXT NOT NULL,
    floor TEXT NOT NULL,
    room TEXT NOT NULL,
    latitude REAL NOT NULL,
    longitude REAL NOT NULL,
    notes TEXT
);

CREATE TABLE IF NOT EXISTS microwave (
    microwave_id INTEGER PRIMARY KEY AUTOINCREMENT,
    location_id INTEGER NOT NULL,
    brand TEXT,
    condition TEXT,
    size TEXT,
    appearance TEXT,
    instructions TEXT,
    notes TEXT,
    image_url TEXT,
    FOREIGN KEY (location_id) REFERENCES location(location_id)
);