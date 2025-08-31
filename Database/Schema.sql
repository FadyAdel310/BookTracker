-- USER table
CREATE TABLE Users (
    email VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    photo VARCHAR(255) NULL,          -- New column for user photo
    full_name VARCHAR(255) NOT NULL        -- New column for user's full name
);

-- BOOK table
CREATE TABLE Books (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    photo VARCHAR(255) NULL,          -- New column for book's photo
    author VARCHAR(255) NOT NULL,         -- New column for book's author
    category VARCHAR(255) NOT NULL        -- New column for book's category
);

-- Book_Category table to represent multivalued Categories
CREATE TABLE Book_Category (
    book_id INT,                       -- Foreign key to Books table
    category VARCHAR(255) NOT NULL,     -- Category for the book
    PRIMARY KEY (book_id, category),    -- Composite primary key to prevent duplicate categories for a book
    FOREIGN KEY (book_id) REFERENCES Books(id) ON DELETE CASCADE
);

-- USER_BOOK
CREATE TABLE User_Book (
    user_email VARCHAR(255),
    book_id INT,
    status ENUM('wantToRead', 'Reading', 'Finished') NOT NULL,
    rating TINYINT CHECK (rating BETWEEN 1 AND 5),
    start_date DATE NULL,
    progress INT NULL CHECK (progress BETWEEN 0 AND 100),
    personal_notes TEXT NULL,          -- New column for user's personal notes on the book

    -- Composite Primary Key
    PRIMARY KEY (user_email, book_id),
    
    -- Foreign Keys
    FOREIGN KEY (user_email) REFERENCES Users(email) ON DELETE CASCADE,
    FOREIGN KEY (book_id) REFERENCES Books(id) ON DELETE CASCADE,

    -- Ensure startDate & progress only if Reading
    CONSTRAINT chk_reading CHECK (
        (status = 'Reading' AND start_date IS NOT NULL AND progress IS NOT NULL)
        OR (status <> 'Reading' AND start_date IS NULL AND progress IS NULL)
    )
);