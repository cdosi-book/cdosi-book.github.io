/**
 * Main JavaScript for Supersonic Intakes Book Website
 */

document.addEventListener('DOMContentLoaded', function() {
    initChapters();
    initMobileMenu();
    initSidebarToggle();
    initSidebarHeadingFromLabel();
    initSmoothScroll();
    initImageFallbacks();
});

/**
 * Initialize chapter accordion with click-to-expand abstracts
 */
function initChapters() {
    const container = document.getElementById('chapters-container');
    if (!container || typeof chaptersData === 'undefined') return;

    chaptersData.forEach((chapter) => {
        const item = document.createElement('div');
        item.className = 'chapter-item';
        
        const hasContent = chapter.abstract && 
            !chapter.abstract.startsWith('ADD YOUR ABSTRACT');

        // Build the chapter HTML
        let extraLinks = '';
        if (chapter.hasPage && chapter.pageUrl) {
            extraLinks = `<a href="${chapter.pageUrl}" class="chapter-link">Read Full Chapter →</a>`;
        }
        if (chapter.hasGitHub) {
            extraLinks = `<a href="https://github.com/YOUR-USERNAME/roam-code" target="_blank" class="chapter-link">View on GitHub →</a>`;
        }

        item.innerHTML = `
            <div class="chapter-header" role="button" tabindex="0" aria-expanded="false">
                <span class="chapter-num">${chapter.isAppendix ? 'App ' : 'Ch '}${chapter.number}</span>
                <span class="chapter-title">${chapter.title}</span>
                <span class="chapter-toggle">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </span>
            </div>
            <div class="chapter-abstract">
                <p>${hasContent ? chapter.abstract : '<em>Abstract coming soon.</em>'}</p>
                ${extraLinks}
            </div>
        `;

        const header = item.querySelector('.chapter-header');
        header.addEventListener('click', () => toggleChapter(item));
        header.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleChapter(item);
            }
        });

        container.appendChild(item);
    });
}

/**
 * Toggle chapter abstract visibility
 */
function toggleChapter(item) {
    const wasActive = item.classList.contains('active');
    const header = item.querySelector('.chapter-header');
    
    // Close all other chapters
    document.querySelectorAll('.chapter-item.active').forEach(el => {
        el.classList.remove('active');
        el.querySelector('.chapter-header').setAttribute('aria-expanded', 'false');
    });

    // Toggle current if it wasn't active
    if (!wasActive) {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
    }
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (!btn || !nav) return;

    let isOpen = false;

    btn.addEventListener('click', () => {
        isOpen = !isOpen;
        
        if (isOpen) {
            nav.style.display = 'flex';
            nav.style.position = 'absolute';
            nav.style.top = '100%';
            nav.style.left = '0';
            nav.style.right = '0';
            nav.style.flexDirection = 'column';
            nav.style.background = 'var(--paper)';
            nav.style.padding = '1rem 2rem';
            nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            
            nav.querySelectorAll('a').forEach(a => {
                a.style.marginLeft = '0';
                a.style.padding = '0.75rem 0';
                a.style.borderBottom = '1px solid rgba(0,0,0,0.05)';
            });
        } else {
            nav.style.display = 'none';
        }
    });

    // Close menu when clicking a link
    nav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            if (window.innerWidth <= 1024) {
                isOpen = false;
                nav.style.display = 'none';
            }
        });
    });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Handle image fallbacks
 */
function initImageFallbacks() {
    // Book cover fallback
    const bookImage = document.querySelector('.book-cover-image');
    const fallbackBook = document.querySelector('.book-3d');
    
    if (bookImage && fallbackBook) {
        bookImage.addEventListener('error', () => {
            bookImage.style.display = 'none';
            fallbackBook.style.display = 'flex';
        });
        
        if (bookImage.complete && bookImage.naturalHeight === 0) {
            bookImage.style.display = 'none';
            fallbackBook.style.display = 'flex';
        }
    }

    // Author photo fallbacks
    document.querySelectorAll('.author-photo img').forEach(img => {
        img.addEventListener('error', () => {
            img.style.display = 'none';
            const avatar = img.nextElementSibling;
            if (avatar) avatar.style.display = 'flex';
        });
    });

    // Gallery fallbacks
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('error', () => {
            img.closest('.gallery-item').style.display = 'none';
        });
    });

    // Hide gallery if no images
    setTimeout(() => {
        const galleryItems = document.querySelectorAll('.gallery-item');
        const visibleItems = Array.from(galleryItems).filter(
            item => item.style.display !== 'none'
        );
        if (visibleItems.length === 0) {
            const gallery = document.querySelector('.gallery');
            if (gallery) gallery.style.display = 'none';
        }
    }, 1000);

    // Group photo fallback
    const groupPhoto = document.querySelector('.authors-group-photo img');
    if (groupPhoto) {
        groupPhoto.addEventListener('error', () => {
            groupPhoto.parentElement.style.display = 'none';
        });
    }
}

/**
 * Sidebar off-canvas toggle for appendix pages
 */
function initSidebarToggle() {
    const sidebar = document.querySelector('.page-sidebar');
    if (!sidebar) return;

    // If sidebar contains no links/content, build a simple TOC from article headings
    const hasLinks = sidebar.querySelectorAll('a').length > 0;
    if (!hasLinks) {
        const article = document.querySelector('article');
        if (article) {
            const headings = article.querySelectorAll('h2, h3');
            if (headings.length > 0) {
                const nav = document.createElement('nav');
                nav.className = 'sidebar-generated-toc';
                const ul = document.createElement('ul');
                ul.style.listStyle = 'none';
                ul.style.padding = '0';
                ul.style.margin = '0';

                headings.forEach(h => {
                    let id = h.id;
                    if (!id) {
                        id = h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                        h.id = id;
                    }
                    const li = document.createElement('li');
                    li.style.marginBottom = '0.5rem';
                    const a = document.createElement('a');
                    a.href = `#${id}`;
                    a.textContent = h.textContent.trim();
                    a.className = 'sidebar-gen-link';
                    li.appendChild(a);
                    ul.appendChild(li);
                });

                nav.appendChild(ul);
                const existingNav = sidebar.querySelector('.appendix-nav') || sidebar.querySelector('.toc');
                if (existingNav) {
                    existingNav.parentNode.insertBefore(nav, existingNav.nextSibling);
                } else {
                    sidebar.innerHTML = '';
                    const title = document.createElement('h3');
                    title.textContent = 'On This Page';
                    title.style.marginTop = '0';
                    sidebar.appendChild(title);
                    sidebar.appendChild(nav);
                }
            }
        }
    }
}

/**
 * Replace sidebar heading with appendix label when present
 */
function initSidebarHeadingFromLabel() {
    const label = document.querySelector('.appendix-label');
    if (!label) return;

    const sidebar = document.querySelector('.page-sidebar');
    if (!sidebar) return;

    // Build heading text: "Appendix X: Full Title"
    const appendixText = label.textContent.trim();
    let titleText = '';
    const articleTitle = document.querySelector('article .article-header-content h1') || document.querySelector('article h1');
    if (articleTitle) titleText = articleTitle.textContent.trim();

    const combined = titleText ? `${appendixText}: ${titleText}` : appendixText;

    // Prefer the heading that labels the TOC (the "On This Page" heading).
    const toc = sidebar.querySelector('.toc');
    if (toc) {
        // The heading is usually the previous sibling before the .toc nav
        const possibleHeading = toc.previousElementSibling;
        if (possibleHeading && possibleHeading.tagName === 'H3') {
            possibleHeading.textContent = combined;
            return;
        }
    }

    // Fallback: update the first h3 only if no TOC heading is found
    const firstH3 = sidebar.querySelector('h3');
    if (firstH3) firstH3.textContent = combined;
}
