import React, { useState, useEffect } from 'react';

// The main App component
const App = () => {
    // State to manage the active book and the active section within that book
    const [booksData, setBooksData] = useState(null);
    const [activeBook, setActiveBook] = useState(null);
    const [activeSection, setActiveSection] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Mock data to simulate the JSON file hosted on R2
    // In a real scenario, this would be a single JSON file with all your titles.
    const mockR2Data = [
        {
            id: 'the-power-of-the-subconscious-mind',
            title: 'The Power of the Subconscious Mind',
            subtitle: 'An analysis of the art of persuasion.',
            coverImageUrl: 'https://placehold.co/400x550/34495e/ffffff?text=The+Power+of+Mind',
            content: [
                {
                    id: 'promise',
                    title: 'The Power of a Transformative Promise',
                    subtitle: 'Emotional Connection & Strategic Positioning',
                    details: `<p>The success of this work is built on a clear, transformative promise. From the very first pages, the author establishes a powerful premise: the subconscious mind is a "miracle worker" that can reconfigure our entire reality. This is achieved through direct, personal questions that create a psychological need for answers.</p>`
                },
                {
                    id: 'simplicity',
                    title: 'Simplicity as a Strategy',
                    subtitle: 'Clarity is the best ally of depth.',
                    details: `<p>One of the author's greatest strengths is the ability to make complex concepts accessible. He explicitly promises to explain profound ideas using everyday language, removing technical barriers that might intimidate the average reader. This promise of simplicity builds a bridge of trust between the author and the reader.</p>`
                },
                {
                    id: 'experience',
                    title: 'The Persuasive Power of Personal Experience',
                    subtitle: 'Authentic testimony builds more credibility.',
                    details: `<p>While many rely on academic titles, the author uses his personal anecdote. He openly shares his experience of healing from a sarcoma using the power of his subconscious mind, offering tangible proof that his method works.</p>`
                }
            ]
        },
        {
            id: 'atomic-habits',
            title: 'Atomic Habits',
            subtitle: 'Based on the book by James Clear.',
            coverImageUrl: 'https://placehold.co/400x550/16a085/ffffff?text=Atomic+Habits',
            content: [
                {
                    id: 'foundation',
                    title: 'The Foundation of Habits',
                    subtitle: 'The 1% rule.',
                    details: `<p>James Clear's book focuses on the idea that small, incremental changes can lead to extraordinary results. A 1% daily improvement produces monumental transformation in the long run.</p>`
                },
                {
                    id: 'four-laws',
                    title: 'The Four Laws of Behavior Change',
                    subtitle: 'Make it obvious, attractive, easy, and satisfying.',
                    details: `<p>The author breaks down habit formation into a simple four-step framework. To form a good habit, you must make it obvious, attractive, easy, and satisfying. To break a bad one, you do the opposite.</p>`
                }
            ]
        },
        {
            id: 'the-48-laws-of-power',
            title: 'The 48 Laws of Power',
            subtitle: 'An analysis of the classic by Robert Greene.',
            coverImageUrl: 'https://placehold.co/400x550/2c3e50/ffffff?text=The+48+Laws',
            content: [
                {
                    id: 'law-1',
                    title: 'Law 1: Never Outshine the Master.',
                    subtitle: 'The subtle art of handling relationships with superiors.',
                    details: `<p>Robert Greene introduces this law as a fundamental strategy for survival in any hierarchy. The idea is to never appear more talented than those in positions of authority, to avoid inspiring fear or insecurity.</p>`
                },
                {
                    id: 'law-3',
                    title: 'Law 3: Conceal your intentions.',
                    subtitle: 'Keep people in the dark.',
                    details: `<p>Law 3 teaches that if you keep your real intentions secret, others will not be able to anticipate your moves. This gives you a strategic advantage, allowing you to guide their reactions.</p>`
                }
            ]
        }
    ];

    // Simulates fetching data from an R2 bucket
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulating a network delay
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Here, you would replace this with a real fetch call
                // const response = await fetch('YOUR_R2_BUCKET_URL/books.json');
                // const data = await response.json();
                
                setBooksData(mockR2Data);
            } catch (err) {
                setError('Failed to load book data.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    // Function to render the correct icon based on the section
    const getIcon = (id) => {
        // Using inline SVG icons for a professional look.
        const iconStyle = "w-12 h-12 sm:w-16 sm:h-16 text-gray-800";
        switch (id) {
            case 'promise':
                return (
                    <svg className={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                );
            case 'simplicity':
                return (
                    <svg className={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 9H9M15 15H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                );
            case 'experience':
                return (
                    <svg className={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 14L12 20L7 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 16V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 16V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                );
            case 'foundation':
                return (
                    <svg className={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                );
            case 'four-laws':
                return (
                    <svg className={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 16L12 19L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                );
            case 'law-1':
                return (
                    <svg className={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2V22M2 12H22M8 8V16M16 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                );
            case 'law-3':
                return (
                    <svg className={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2.14999 15H21.85" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3.24999 9H20.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 2.05L12 21.95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19 19C15.8284 21.1685 12.0003 22 8 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 5C8.17157 2.83152 11.9997 2 16 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                );
            default:
                return (
                    <svg className={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 18V12M12 12L15 15M12 12L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                );
        }
    };

    // Main App component logic
    const handleCardClick = (bookId) => {
        const book = booksData.find(b => b.id === bookId);
        setActiveBook(book);
        setActiveSection(null);
    };

    const handleSectionClick = (sectionId) => {
        setActiveSection(sectionId);
    };

    // Home view: displays a list of books as cards
    const HomeView = () => (
        <>
            <header className="text-center max-w-4xl mx-auto mb-12">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Your Digital Library</h1>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                    Explore a curated collection of powerful insights.
                </p>
            </header>
            <main className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {booksData.map(book => (
                    <div
                        key={book.id}
                        className="bg-white rounded-2xl shadow-xl flex flex-col items-center text-center overflow-hidden cursor-pointer transition-all transform hover:scale-105 hover:shadow-2xl"
                        onClick={() => handleCardClick(book.id)}
                    >
                        <img 
                            src={book.coverImageUrl} 
                            alt={`Cover of ${book.title}`} 
                            className="w-full h-auto object-cover border-b border-gray-100" 
                        />
                        <div className="p-6 w-full flex-grow flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{book.title}</h3>
                                <p className="text-sm text-gray-500 font-light">{book.subtitle}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </>
    );

    // Book View: displays sections of a specific book
    const BookView = () => {
        const activeContent = activeBook.content.find(item => item.id === activeSection);
        
        return (
            <>
                <header className="text-center max-w-4xl mx-auto mb-12">
                    <button
                        onClick={() => setActiveBook(null)}
                        className="mb-4 text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center justify-center font-medium"
                    >
                        &larr; Back to all books
                    </button>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">{activeBook.title}</h1>
                    <p className="text-lg text-gray-600 leading-relaxed font-light">
                        An in-depth analysis of the strategies from this bestseller.
                    </p>
                </header>
                <main className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activeBook.content.map(item => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center cursor-pointer transition-all transform hover:scale-105 hover:shadow-2xl"
                            onClick={() => handleSectionClick(item.id)}
                        >
                            <div className="flex items-center justify-center bg-gray-100 p-4 rounded-full mb-4">
                                {getIcon(item.id)}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-500 font-light">{item.subtitle}</p>
                        </div>
                    ))}
                </main>
                {activeSection && activeContent && <DetailView content={activeContent} onClose={() => setActiveSection(null)} />}
            </>
        );
    };

    // Modal/Detail view component
    const DetailView = ({ content, onClose }) => {
        const { title, details } = content;
        return (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10 max-w-4xl w-full max-h-[90vh] overflow-y-auto transform scale-95 animate-slide-in">
                    <div className="flex justify-end">
                        <button
                            className="text-gray-500 hover:text-gray-900 text-3xl font-bold leading-none"
                            onClick={onClose}
                        >
                            &times;
                        </button>
                    </div>
                    <div className="flex flex-col items-center text-center mb-6">
                        <div className="bg-gray-100 rounded-full p-4 mb-4">
                            {getIcon(content.id)}
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">{title}</h1>
                    </div>
                    <div className="text-gray-700 leading-relaxed space-y-4 prose max-w-none" dangerouslySetInnerHTML={{ __html: details }} />
                </div>
            </div>
        );
    };

    // Render logic based on app state
    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
                <p className="text-gray-600 text-lg">Loading your library...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 text-red-600">
                <p>{error}</p>
                <p>Please try again later.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 md:p-12 font-inter">
            {!activeBook ? <HomeView /> : <BookView />}
        </div>
    );
};

export default App;
