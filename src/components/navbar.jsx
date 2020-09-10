import React, { useState } from 'react';
import { Link } from '@reach/router';

function Navbar() {
    const [categories] = useState(["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"]);
    return (
        <div class="header">
            <nav>
                <ul className="right">
                    <li><Link to="/">Top Headlines</Link></li>
                    {categories.map(category => (
                        <li><Link to={`/${category}`}>{category}</Link></li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
