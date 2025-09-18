// Asset Preloader for Critical Resources
export const preloadCriticalAssets = (): Promise<void[]> => {
  const criticalAssets = [
    '/assets/images/profile/ahmed-profile-main.jpg',
    '/assets/images/profile/ahmed-avatar.png',
    '/assets/resume/Ahmed_Asaad_CV.pdf',
    '/assets/images/tech-icons/flutter-icon.svg',
    '/assets/images/tech-icons/dart-icon.svg',
    '/assets/images/tech-icons/firebase-icon.svg'
  ];

  return Promise.all(
    criticalAssets.map(asset => {
      return new Promise<void>((resolve, reject) => {
        if (asset.endsWith('.pdf')) {
          // For PDF files, just check if they exist
          fetch(asset, { method: 'HEAD' })
            .then(() => resolve())
            .catch(() => resolve()); // Don't block loading for PDF issues
        } else {
          // For images, preload them
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Don't block loading for missing images
          img.src = asset;
        }
      });
    })
  );
};

export const preloadFont = (fontFamily: string, weight: string = '400'): Promise<void> => {
  return new Promise((resolve) => {
    const font = new FontFace(fontFamily, `url(https://fonts.googleapis.com/css2?family=${fontFamily}:wght@${weight}&display=swap)`);
    font.load()
      .then(() => {
        document.fonts.add(font);
        resolve();
      })
      .catch(() => resolve()); // Don't block for font loading issues
  });
};

// Preload critical fonts
export const preloadCriticalFonts = (): Promise<void[]> => {
  const fonts = [
    { family: 'Inter', weights: ['400', '600'] },
    { family: 'JetBrains+Mono', weights: ['400', '600'] },
    { family: 'Fira+Code', weights: ['400'] }
  ];

  return Promise.all(
    fonts.flatMap(font =>
      font.weights.map(weight => preloadFont(font.family, weight))
    )
  );
};

// Performance monitoring
export const measureLoadingPerformance = () => {
  const startTime = performance.now();

  return {
    finish: () => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      console.log(`Loading completed in ${duration.toFixed(2)}ms`);
      return duration;
    }
  };
};