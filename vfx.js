
         function scrollToBottom() {
            document.getElementById('bottom').scrollIntoView({ behavior: 'smooth' });
        }
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Initial animations
        const tl = gsap.timeline();

        tl.to('.hero-title', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out'
        })
        .to('.hero-subtitle', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out'
        }, '-=0.5')
        .to('.cta-button', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out'
        }, '-=0.5');

        // Floating animation for background elements
        gsap.to('.background-element', {
            y: 50,
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: 'power1.inOut',
            stagger: {
                each: 0.5
            }
        });

        
         // Mouse parallax effect for background elements
        document.addEventListener('mousemove', (e) => {
            const elements = document.querySelectorAll('.background-element');
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;

            elements.forEach((element, index) => {
                const depth = index + 1;
                const moveX = mouseX * 50 * depth;
                const moveY = mouseY * 50 * depth;
                
                gsap.to(element, {
                    x: moveX,
                    y: moveY,
                    duration: 1,
                    ease: 'power2.out'
                });
            });
        });
    
        // Create floating bubbles in background
        function createBubbles() {
          const footer = document.querySelector('.footer');
          for (let i = 0; i < 10; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            const size = Math.random() * 60 + 20;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${Math.random() * 100}%`;
            bubble.style.animationDelay = `${Math.random() * 5}s`;
            footer.appendChild(bubble);
          }
        }
    
        // Discord click handler
        function openDiscord() {
          // Replace with your Discord profile link
          window.open('https://discord.com/users/1077464331261857853', '_blank');
        }
         
        function openTwitter() {
            window.open('https://x.com/vfxraito', '_blank');
        }
        
        // Initialize bubbles
        createBubbles();
      

        // Sample YouTuber data
        const youtubers = [
          {
            name: "PSD2",
            subscribers: "427k subscribers",
            icon: "dist/channel-PSD2.jpg",
            url: "https://www.youtube.com/@tgpsd1"
          },
          {
            name: "Yug Playz",
            subscribers: "1.98M subscribers",
            icon: "dist/channel-yug_Plays.jpg",
            url: "https://www.youtube.com/@YugPlayz"
          },
          {
            name: "Sarcastic Singles",
            subscribers: "184k subscribers",
            icon: "dist/channel-Sarcasstic.jpg",
            url: "https://www.youtube.com/@SarcasticSingles"
          },
          {
            name: "TechShot",
            subscribers: "1.61M subscribers",
            icon: "dist/channel-Techshot.jpg",
            url: "https://www.youtube.com/@TechShotTG"
          },
          
        ];
    
        // Function to create YouTuber cards
        function createYouTuberCard(youtuber) {
          const card = document.createElement('div');
          card.className = 'youtuber-card';
          card.innerHTML = `
            <img src="${youtuber.icon}" alt="${youtuber.name}" class="youtuber-icon">
            <div class="youtuber-info">
              <div class="youtuber-name">${youtuber.name}</div>
              <div class="youtuber-subs">${youtuber.subscribers}</div>
            </div>
          `;
          card.addEventListener('click', () => {
            window.open(youtuber.url, '_blank');
          });
          return card;
        }
    
        // Function to populate the scroll container
        function populateScrollContainer() {
          const container = document.getElementById('scrollContainer');
          
          // Create the initial set of cards
          youtubers.forEach(youtuber => {
            container.appendChild(createYouTuberCard(youtuber));
          });
          
          // Clone the cards to ensure smooth infinite scrolling
          const initialCards = [...container.children];
          initialCards.forEach(card => {
            const clone = card.cloneNode(true);
            clone.addEventListener('click', () => {
              const index = initialCards.indexOf(card);
              window.open(youtubers[index].url, '_blank');
            });
            container.appendChild(clone);
          });
          
          // Adjust animation duration based on number of items
          container.style.animationDuration = `${youtubers.length * 5}s`;
        }
    
        // Initialize on page load
        document.addEventListener('DOMContentLoaded', populateScrollContainer);
      

  // Intersection Observer for scroll animations
  document.addEventListener('DOMContentLoaded', () => {
    const videoRows = document.querySelectorAll('.video-row');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    });
    
    videoRows.forEach(row => {
      observer.observe(row);
    });
    
    // Placeholder function to replace blank iframes with actual content
    // In a real implementation, you would replace this with your actual videos
    
  });