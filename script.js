// ページが読み込まれたら実行する処理
window.addEventListener('load', () => {
    // ボタン要素を取得する
    const aboutButton = document.querySelector('#about-button');
    const skillsButton = document.querySelector('#skills-button');
    const projectsButton = document.querySelector('#projects-button');
    const contactButton = document.querySelector('#contact-button');
  
    // ボタン要素が存在する場合のみ、クリック時のスクロール機能を追加する
    if (aboutButton && skillsButton && projectsButton && contactButton) {
      // スクロール先の要素を取得する
      const aboutSection = document.querySelector('#about');
      const skillsSection = document.querySelector('#skills');
      const projectsSection = document.querySelector('#projects');
      const contactSection = document.querySelector('#contact');
  
      // スクロール先の座標を計算する関数
      const calculateScrollPosition = (section) => {
        const rect = section.getBoundingClientRect();
        return window.scrollY + rect.top;
      };
  
      // 各ボタンをクリックした際に、対応する項目にスクロールする処理を追加する
      aboutButton.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({
          top: calculateScrollPosition(aboutSection),
          behavior: 'smooth'
        });
      });
  
      skillsButton.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({
          top: calculateScrollPosition(skillsSection),
          behavior: 'smooth'
        });
      });
  
      projectsButton.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({
          top: calculateScrollPosition(projectsSection),
          behavior: 'smooth'
        });
      });
  
      contactButton.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({
          top: calculateScrollPosition(contactSection),
          behavior: 'smooth'
        });
      });
    }
  });
  
  