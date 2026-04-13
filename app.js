// ===== MOO'S TOWER - Cozy Focus App =====

(function () {
  'use strict';

  // ===== SHOP ITEM CATALOG =====
  const SHOP_ITEMS = [
    // Furniture
    { id: 'rug_pink', name: 'Cozy Pink Rug', icon: '🟤', emoji: '🩷', category: 'furniture', price: 10, desc: 'A soft rug for Moo to sit on', floorReq: 1, css: { bottom: '28%', left: '32%', width: '120px', height: '35px', background: '#f0a0b0', borderRadius: '50%', border: '3px solid #d88a9a', opacity: '0.8' } },
    { id: 'rug_green', name: 'Mossy Rug', icon: '🟢', emoji: '🟢', category: 'furniture', price: 15, desc: 'Earthy and calming', floorReq: 1, css: { bottom: '28%', left: '28%', width: '130px', height: '38px', background: '#8aba8a', borderRadius: '50%', border: '3px solid #6a9a6a', opacity: '0.8' } },
    { id: 'cushion_blue', name: 'Blue Cushion', icon: '🔵', emoji: '💙', category: 'cozy', price: 8, desc: 'Moo loves napping on this', floorReq: 1, css: { bottom: '34%', left: '60%', width: '28px', height: '20px', background: '#7ab8d4', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' } },
    { id: 'cushion_yellow', name: 'Sunny Cushion', icon: '🟡', emoji: '💛', category: 'cozy', price: 8, desc: 'Warm like sunshine', floorReq: 1, css: { bottom: '33%', left: '20%', width: '26px', height: '18px', background: '#f0d060', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' } },
    { id: 'bookshelf', name: 'Bookshelf', icon: '📚', emoji: '📚', category: 'furniture', price: 30, desc: 'Filled with cat tales', floorReq: 1, css: { bottom: '35%', left: '3%', width: '55px', height: '90px', background: '#a0784c', borderRadius: '4px 4px 0 0', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
    { id: 'side_table', name: 'Side Table', icon: '🪑', emoji: '🪑', category: 'furniture', price: 20, desc: 'Perfect for a cup of tea', floorReq: 1, css: { bottom: '35%', left: '68%', width: '30px', height: '35px', background: '#b88a5a', borderRadius: '4px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
    { id: 'armchair', name: 'Cozy Armchair', icon: '🛋️', emoji: '🛋️', category: 'furniture', price: 50, desc: 'The comfiest seat in the house', floorReq: 2, css: { bottom: '33%', left: '72%', width: '48px', height: '50px', background: '#c47a5a', borderRadius: '12px 12px 6px 6px', boxShadow: '0 3px 8px rgba(0,0,0,0.12)' } },
    { id: 'desk', name: 'Study Desk', icon: '🪵', emoji: '📝', category: 'furniture', price: 40, desc: 'Where the magic happens', floorReq: 2, css: { bottom: '35%', left: '8%', width: '65px', height: '40px', background: '#a08060', borderRadius: '3px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', borderTop: '4px solid #8a6a4a' } },
    { id: 'bed', name: 'Cat Bed', icon: '🛏️', emoji: '🛏️', category: 'cozy', price: 60, desc: 'Moo\'s favorite nap spot', floorReq: 3, css: { bottom: '30%', left: '5%', width: '55px', height: '30px', background: '#d4a0b0', borderRadius: '28px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', border: '3px solid #c490a0' } },

    // Plants
    { id: 'plant_small', name: 'Little Succulent', icon: '🌵', emoji: '🪴', category: 'plants', price: 12, desc: 'Low maintenance, high cuteness', floorReq: 1, css: { bottom: '35%', right: '8%', width: '22px', height: '30px' } },
    { id: 'plant_big', name: 'Monstera', icon: '🌿', emoji: '🌿', category: 'plants', price: 35, desc: 'A leafy friend for Moo', floorReq: 1, css: { bottom: '35%', right: '3%', width: '35px', height: '55px' } },
    { id: 'cactus', name: 'Friendly Cactus', icon: '🌵', emoji: '🌵', category: 'plants', price: 18, desc: 'Prickly but lovable', floorReq: 1, css: { bottom: '53%', right: '14%', width: '18px', height: '28px' } },
    { id: 'flowers', name: 'Flower Vase', icon: '💐', emoji: '💐', category: 'plants', price: 25, desc: 'Brightens any room', floorReq: 2, css: { bottom: '55%', left: '22%', width: '22px', height: '30px' } },
    { id: 'hanging_plant', name: 'Hanging Ivy', icon: '🌱', emoji: '🌱', category: 'plants', price: 45, desc: 'Cascading greenery', floorReq: 3, css: { top: '8%', left: '35%', width: '30px', height: '40px' } },

    // Decor
    { id: 'clock', name: 'Wall Clock', icon: '🕐', emoji: '🕐', category: 'decor', price: 20, desc: 'Tick tock, focus o\'clock!', floorReq: 1, css: { top: '12%', left: '38%', width: '30px', height: '30px' } },
    { id: 'picture_cat', name: 'Cat Painting', icon: '🖼️', emoji: '🐱', category: 'decor', price: 25, desc: 'A portrait of Moo', floorReq: 1, css: { top: '14%', left: '12%', width: '42px', height: '34px' } },
    { id: 'picture_mountain', name: 'Mountain Scene', icon: '🏔️', emoji: '🏔️', category: 'decor', price: 22, desc: 'A peaceful landscape', floorReq: 2, css: { top: '10%', left: '55%', width: '44px', height: '32px' } },
    { id: 'poster', name: 'Focus Poster', icon: '📃', emoji: '✨', category: 'decor', price: 15, desc: '"You can do it!" - Moo', floorReq: 1, css: { top: '18%', left: '70%', width: '28px', height: '36px' } },
    { id: 'bunting', name: 'Party Bunting', icon: '🎏', emoji: '🎉', category: 'decor', price: 30, desc: 'Festive little flags', floorReq: 2, css: { top: '4%', left: '15%', width: '160px', height: '20px' } },
    { id: 'globe', name: 'Mini Globe', icon: '🌍', emoji: '🌍', category: 'decor', price: 28, desc: 'Spin it between sessions', floorReq: 2, css: { bottom: '55%', left: '70%', width: '20px', height: '24px' } },

    // Cozy
    { id: 'blanket', name: 'Knit Blanket', icon: '🧶', emoji: '🧶', category: 'cozy', price: 35, desc: 'Made with focus and love', floorReq: 2, css: { bottom: '35%', left: '55%', width: '40px', height: '25px', background: '#e8a070', borderRadius: '6px', opacity: '0.85' } },
    { id: 'mug', name: 'Hot Cocoa', icon: '☕', emoji: '☕', category: 'cozy', price: 10, desc: 'Perpetually warm somehow', floorReq: 1, css: { bottom: '56%', left: '72%', width: '16px', height: '16px' } },
    { id: 'candle', name: 'Cozy Candle', icon: '🕯️', emoji: '🕯️', category: 'cozy', price: 14, desc: 'Vanilla-scented focus fuel', floorReq: 1, css: { bottom: '55%', left: '40%', width: '10px', height: '18px' } },
    { id: 'tea_set', name: 'Tea Set', icon: '🫖', emoji: '🫖', category: 'cozy', price: 40, desc: 'Afternoon tea with Moo', floorReq: 2, css: { bottom: '56%', left: '10%', width: '30px', height: '20px' } },
    { id: 'fireplace', name: 'Mini Fireplace', icon: '🔥', emoji: '🧱', category: 'cozy', price: 80, desc: 'Warm and crackling', floorReq: 3, css: { bottom: '35%', left: '80%', width: '50px', height: '55px', background: '#8a6a4a', borderRadius: '4px 4px 0 0' } },

    // Lighting
    { id: 'lamp_floor', name: 'Floor Lamp', icon: '🪔', emoji: '💡', category: 'lighting', price: 22, desc: 'Soft warm glow', floorReq: 1, css: { bottom: '35%', left: '82%', width: '18px', height: '65px' } },
    { id: 'fairy_lights', name: 'Fairy Lights', icon: '✨', emoji: '✨', category: 'lighting', price: 35, desc: 'Twinkle twinkle little focus', floorReq: 2, css: { top: '3%', left: '5%', width: '200px', height: '15px' } },
    { id: 'lantern', name: 'Paper Lantern', icon: '🏮', emoji: '🏮', category: 'lighting', price: 28, desc: 'A gentle warm light', floorReq: 2, css: { top: '6%', left: '60%', width: '24px', height: '30px' } },
    { id: 'lava_lamp', name: 'Lava Lamp', icon: '🫧', emoji: '🫧', category: 'lighting', price: 45, desc: 'Mesmerizing but don\'t stare', floorReq: 3, css: { bottom: '56%', right: '6%', width: '14px', height: '28px' } },
    { id: 'chandelier', name: 'Mini Chandelier', icon: '💎', emoji: '💎', category: 'lighting', price: 100, desc: 'Fancy focus for fancy cats', floorReq: 4, css: { top: '2%', left: '42%', width: '36px', height: '30px' } },
  ];

  // ===== TOWER FLOORS =====
  const TOWER_FLOORS = [
    { id: 1, name: 'The Den', desc: 'Moo\'s cozy starting room', icon: '🏠', minutesRequired: 0 },
    { id: 2, name: 'The Study', desc: 'A quiet place to think', icon: '📖', minutesRequired: 60 },
    { id: 3, name: 'The Lounge', desc: 'Relax after a good session', icon: '☕', minutesRequired: 180 },
    { id: 4, name: 'The Garden', desc: 'Fresh air and sunshine', icon: '🌻', minutesRequired: 420 },
    { id: 5, name: 'The Library', desc: 'Knowledge is power!', icon: '📚', minutesRequired: 720 },
    { id: 6, name: 'The Observatory', desc: 'Stargazing with Moo', icon: '🔭', minutesRequired: 1200 },
    { id: 7, name: 'The Cloud Room', desc: 'Above it all', icon: '☁️', minutesRequired: 2000 },
    { id: 8, name: 'The Aurora', desc: 'The top of Moo\'s Tower', icon: '🌌', minutesRequired: 3000 },
  ];

  // ===== MOO'S DIALOGUE =====
  const DIALOGUE = {
    idle: [
      "Let's focus together!",
      "Ready when you are! 😊",
      "I believe in you!",
      "Time to get cozy and focus!",
      "Pick a time, any time!",
      "Let's build our tower!",
      "*purr purr* 🧡",
    ],
    focusStart: [
      "Let's do this! 💪",
      "Knitting time! 🧶",
      "Focus mode activated!",
      "I'll keep you company!",
      "We've got this!",
    ],
    focusMid: [
      "You're doing great!",
      "Keep going! 🌟",
      "*knit knit knit*",
      "Almost there...",
      "So proud of you!",
      "Stay cozy, stay focused!",
    ],
    focusComplete: [
      "We did it!! 🎉",
      "Amazing work! 🌟",
      "More fish for us!",
      "You're incredible!",
      "Time for a break! 😸",
    ],
    focusCancel: [
      "It's okay... 😿",
      "We'll try again soon",
      "Don't worry about it!",
      "Next time! 💕",
    ],
    purchase: [
      "Ooh, shiny! ✨",
      "I love it! 🧡",
      "Our room looks better!",
      "Great choice!",
      "So cozy! 😻",
    ],
    breakTime: [
      "Rest is important too!",
      "Take a breather 😌",
      "Stretch those paws!",
      "*yawns contentedly*",
    ],
  };

  // ===== STATE =====
  let state = loadState();

  function defaultState() {
    return {
      fish: 0,
      totalFishEarned: 0,
      totalMinutes: 0,
      totalSessions: 0,
      longestSession: 0,
      streak: 0,
      lastSessionDate: null,
      ownedItems: [],
      placedItems: [],
      currentFloor: 1,
      weeklyMinutes: {},  // { 'YYYY-MM-DD': minutes }
    };
  }

  function loadState() {
    try {
      const saved = localStorage.getItem('moos-tower-state');
      if (saved) {
        return { ...defaultState(), ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('Failed to load state:', e);
    }
    return defaultState();
  }

  function saveState() {
    try {
      localStorage.setItem('moos-tower-state', JSON.stringify(state));
    } catch (e) {
      console.warn('Failed to save state:', e);
    }
  }

  // ===== TIMER STATE =====
  let timerState = {
    duration: 25 * 60,     // seconds
    remaining: 0,
    isRunning: false,
    isPaused: false,
    interval: null,
    breakInterval: null,
    breakRemaining: 0,
    fishEarned: 0,
    selectedMinutes: 25,
  };

  // ===== DOM REFS =====
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const els = {
    fishCount: $('#fish-count'),
    totalMinutes: $('#total-minutes'),
    streakCount: $('#streak-count'),
    timerSetup: $('#timer-setup'),
    timerActive: $('#timer-active'),
    timerBreak: $('#timer-break'),
    timerMinutes: $('#timer-minutes'),
    timerSeconds: $('#timer-seconds'),
    timerRingProgress: $('#timer-ring-progress'),
    fishEarningCount: $('#fish-earning-count'),
    timeSlider: $('#time-slider'),
    timeDisplay: $('#time-display'),
    startBtn: $('#start-btn'),
    pauseBtn: $('#pause-btn'),
    cancelBtn: $('#cancel-btn'),
    skipBreakBtn: $('#skip-break-btn'),
    breakMessage: $('#break-message'),
    rewardAmount: $('#reward-amount'),
    breakTimerDisplay: $('#break-timer-display'),
    moo: $('#moo'),
    speechBubble: $('#speech-bubble'),
    speechText: $('#speech-text'),
    shopFishCount: $('#shop-fish-count'),
    shopItems: $('#shop-items'),
    furnitureLayer: $('#furniture-layer'),
    roomView: $('#room-view'),
    shopView: $('#shop-view'),
    towerView: $('#tower-view'),
    statsView: $('#stats-view'),
    towerContainer: $('#tower-container'),
    windowSky: $('#window-sky'),
    scarfProgress: $('#scarf-progress'),
  };

  // ===== INIT =====
  function init() {
    createParticles();
    updateUI();
    bindEvents();
    renderShop();
    renderTower();
    renderFurniture();
    renderStats();
    updateWindowTime();
    setInterval(updateWindowTime, 60000);
    showSpeech(randomFrom(DIALOGUE.idle));

    // Moo random idle speech
    setInterval(() => {
      if (!timerState.isRunning) {
        showSpeech(randomFrom(DIALOGUE.idle));
      }
    }, 15000);
  }

  // ===== PARTICLES =====
  function createParticles() {
    const container = $('#particles');
    const shapes = ['🐟', '✨', '🧶', '💕', '🌟'];
    for (let i = 0; i < 12; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.textContent = shapes[i % shapes.length];
      p.style.left = Math.random() * 100 + '%';
      p.style.fontSize = (8 + Math.random() * 12) + 'px';
      p.style.animationDuration = (15 + Math.random() * 25) + 's';
      p.style.animationDelay = (Math.random() * 20) + 's';
      container.appendChild(p);
    }
  }

  // ===== EVENTS =====
  function bindEvents() {
    // Timer presets
    $$('.preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.preset-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const min = parseInt(btn.dataset.minutes);
        timerState.selectedMinutes = min;
        els.timeSlider.value = min;
        els.timeDisplay.textContent = min + ' minutes';
      });
    });

    // Slider
    els.timeSlider.addEventListener('input', () => {
      const min = parseInt(els.timeSlider.value);
      timerState.selectedMinutes = min;
      els.timeDisplay.textContent = min + ' minute' + (min !== 1 ? 's' : '');
      $$('.preset-btn').forEach(b => {
        b.classList.toggle('active', parseInt(b.dataset.minutes) === min);
      });
    });

    // Start
    els.startBtn.addEventListener('click', startFocus);

    // Pause
    els.pauseBtn.addEventListener('click', togglePause);

    // Cancel
    els.cancelBtn.addEventListener('click', cancelFocus);

    // Skip break
    els.skipBreakBtn.addEventListener('click', skipBreak);

    // Navigation
    $$('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.dataset.view;
        switchView(view);
      });
    });

    // Shop categories
    $$('.cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderShop(btn.dataset.category);
      });
    });
  }

  // ===== VIEW SWITCHING =====
  function switchView(view) {
    $$('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.view === view));

    els.shopView.classList.toggle('hidden', view !== 'shop');
    els.towerView.classList.toggle('hidden', view !== 'tower');
    els.statsView.classList.toggle('hidden', view !== 'stats');

    if (view === 'shop') {
      els.shopFishCount.textContent = state.fish;
      renderShop();
    } else if (view === 'tower') {
      renderTower();
    } else if (view === 'stats') {
      renderStats();
    }
  }

  // ===== TIMER =====
  function startFocus() {
    const minutes = timerState.selectedMinutes;
    timerState.duration = minutes * 60;
    timerState.remaining = timerState.duration;
    timerState.isRunning = true;
    timerState.isPaused = false;
    timerState.fishEarned = 0;

    els.timerSetup.classList.add('hidden');
    els.timerActive.classList.remove('hidden');
    els.timerBreak.classList.add('hidden');

    // Moo starts focusing
    els.moo.className = 'moo-focusing';
    showSpeech(randomFrom(DIALOGUE.focusStart));

    updateTimerDisplay();

    let lastMinuteCheck = timerState.remaining;

    timerState.interval = setInterval(() => {
      if (timerState.isPaused) return;

      timerState.remaining--;

      // Award fish every 60 seconds
      if (lastMinuteCheck - timerState.remaining >= 60) {
        timerState.fishEarned++;
        lastMinuteCheck = timerState.remaining;
        els.fishEarningCount.textContent = timerState.fishEarned;
      }

      // Update scarf progress
      const progress = 1 - (timerState.remaining / timerState.duration);
      els.scarfProgress.style.width = (progress * 60) + 'px';

      // Mid-focus dialogue
      if (timerState.remaining === Math.floor(timerState.duration / 2)) {
        showSpeech(randomFrom(DIALOGUE.focusMid));
      }

      updateTimerDisplay();

      if (timerState.remaining <= 0) {
        completeFocus();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const min = Math.floor(timerState.remaining / 60);
    const sec = timerState.remaining % 60;
    els.timerMinutes.textContent = String(min).padStart(2, '0');
    els.timerSeconds.textContent = String(sec).padStart(2, '0');

    // Ring progress
    const circumference = 2 * Math.PI * 90; // r=90
    const progress = timerState.remaining / timerState.duration;
    els.timerRingProgress.style.strokeDashoffset = circumference * (1 - progress);
  }

  function togglePause() {
    timerState.isPaused = !timerState.isPaused;
    els.pauseBtn.textContent = timerState.isPaused ? '▶ Resume' : '⏸ Pause';

    if (timerState.isPaused) {
      els.moo.className = 'moo-idle';
    } else {
      els.moo.className = 'moo-focusing';
    }
  }

  function cancelFocus() {
    clearInterval(timerState.interval);
    timerState.isRunning = false;
    timerState.isPaused = false;

    els.timerActive.classList.add('hidden');
    els.timerSetup.classList.remove('hidden');

    els.moo.className = 'moo-sad';
    showSpeech(randomFrom(DIALOGUE.focusCancel));
    els.scarfProgress.style.width = '0px';

    setTimeout(() => {
      els.moo.className = 'moo-idle';
    }, 3000);
  }

  function completeFocus() {
    clearInterval(timerState.interval);
    timerState.isRunning = false;

    // Award final fish (1 per minute of session)
    const totalFish = timerState.selectedMinutes;
    timerState.fishEarned = totalFish;

    state.fish += totalFish;
    state.totalFishEarned += totalFish;
    state.totalMinutes += timerState.selectedMinutes;
    state.totalSessions++;

    if (timerState.selectedMinutes > state.longestSession) {
      state.longestSession = timerState.selectedMinutes;
    }

    // Weekly tracking
    const today = new Date().toISOString().split('T')[0];
    state.weeklyMinutes[today] = (state.weeklyMinutes[today] || 0) + timerState.selectedMinutes;

    // Streak
    updateStreak();

    // Check floor unlocks
    checkFloorUnlocks();

    saveState();

    // UI
    els.timerActive.classList.add('hidden');
    els.timerBreak.classList.remove('hidden');
    els.rewardAmount.textContent = totalFish;
    els.breakMessage.textContent = `Great work! Moo knitted ${totalFish} fish worth of scarves!`;
    els.scarfProgress.style.width = '0px';

    els.moo.className = 'moo-happy';
    showSpeech(randomFrom(DIALOGUE.focusComplete));
    showToast(`+${totalFish} 🐟 earned!`, 'reward');

    updateUI();

    // Start break timer (5 min)
    startBreak();

    setTimeout(() => {
      els.moo.className = 'moo-idle';
    }, 4000);
  }

  function startBreak() {
    timerState.breakRemaining = 5 * 60;
    updateBreakDisplay();

    timerState.breakInterval = setInterval(() => {
      timerState.breakRemaining--;
      updateBreakDisplay();

      if (timerState.breakRemaining <= 0) {
        clearInterval(timerState.breakInterval);
        skipBreak();
      }
    }, 1000);
  }

  function updateBreakDisplay() {
    const min = Math.floor(timerState.breakRemaining / 60);
    const sec = timerState.breakRemaining % 60;
    els.breakTimerDisplay.textContent = `${min}:${String(sec).padStart(2, '0')}`;
  }

  function skipBreak() {
    clearInterval(timerState.breakInterval);
    els.timerBreak.classList.add('hidden');
    els.timerSetup.classList.remove('hidden');
    showSpeech(randomFrom(DIALOGUE.idle));
  }

  function updateStreak() {
    const today = new Date().toISOString().split('T')[0];
    if (state.lastSessionDate) {
      const last = new Date(state.lastSessionDate);
      const now = new Date(today);
      const diffDays = Math.floor((now - last) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        state.streak++;
      } else if (diffDays > 1) {
        state.streak = 1;
      }
      // Same day — keep streak as is
    } else {
      state.streak = 1;
    }
    state.lastSessionDate = today;
  }

  function checkFloorUnlocks() {
    for (const floor of TOWER_FLOORS) {
      if (state.totalMinutes >= floor.minutesRequired && floor.id > state.currentFloor) {
        state.currentFloor = floor.id;
        showToast(`🗼 Floor ${floor.id} unlocked: ${floor.name}!`, 'success');
      }
    }
  }

  // ===== UI UPDATE =====
  function updateUI() {
    els.fishCount.textContent = state.fish;
    els.totalMinutes.textContent = state.totalMinutes;
    els.streakCount.textContent = state.streak;
    if (els.shopFishCount) els.shopFishCount.textContent = state.fish;
  }

  // ===== SHOP =====
  function renderShop(category = 'all') {
    els.shopItems.innerHTML = '';

    const items = category === 'all'
      ? SHOP_ITEMS
      : SHOP_ITEMS.filter(item => item.category === category);

    items.forEach(item => {
      const owned = state.ownedItems.includes(item.id);
      const locked = item.floorReq > state.currentFloor;
      const canAfford = state.fish >= item.price;

      const card = document.createElement('div');
      card.className = 'shop-card' + (owned ? ' owned' : '') + (locked ? ' locked' : '');

      card.innerHTML = `
        <span class="shop-card-icon">${item.emoji || item.icon}</span>
        <div class="shop-card-name">${item.name}</div>
        <div class="shop-card-price">
          <span class="stat-icon">🐟</span> ${item.price}
        </div>
        <div class="shop-card-desc">${item.desc}</div>
        ${locked ? `<div class="shop-card-desc">Floor ${item.floorReq} required</div>` : ''}
      `;

      if (!owned && !locked) {
        card.addEventListener('click', () => purchaseItem(item));

        if (!canAfford) {
          card.style.opacity = '0.6';
        }
      }

      els.shopItems.appendChild(card);
    });
  }

  function purchaseItem(item) {
    if (state.fish < item.price) {
      showToast('Not enough fish! Keep focusing! 🐟', '');
      return;
    }

    if (state.ownedItems.includes(item.id)) return;

    state.fish -= item.price;
    state.ownedItems.push(item.id);
    state.placedItems.push(item.id);
    saveState();

    updateUI();
    renderShop();
    renderFurniture();

    showSpeech(randomFrom(DIALOGUE.purchase));
    showToast(`Bought ${item.name}! ✨`, 'success');
  }

  // ===== FURNITURE =====
  function renderFurniture() {
    els.furnitureLayer.innerHTML = '';

    state.placedItems.forEach(itemId => {
      const item = SHOP_ITEMS.find(i => i.id === itemId);
      if (!item) return;

      const el = document.createElement('div');
      el.className = 'furniture-item new';
      el.textContent = item.emoji || item.icon;
      el.style.fontSize = '1.8rem';
      el.title = item.name;

      // Position from catalog CSS
      if (item.css) {
        Object.assign(el.style, item.css);
        // If it has a background, it's a CSS-drawn item, hide emoji
        if (item.css.background) {
          el.textContent = '';
        }
      }

      // Remove new animation class after it plays
      el.addEventListener('animationend', () => el.classList.remove('new'));

      els.furnitureLayer.appendChild(el);
    });
  }

  // ===== TOWER =====
  function renderTower() {
    els.towerContainer.innerHTML = '';

    TOWER_FLOORS.forEach(floor => {
      const unlocked = state.totalMinutes >= floor.minutesRequired;
      const isCurrent = floor.id === state.currentFloor;
      const nextFloor = TOWER_FLOORS.find(f => f.id === floor.id + 1);

      const el = document.createElement('div');
      el.className = 'tower-floor' +
        (unlocked ? ' unlocked' : ' locked') +
        (isCurrent ? ' current' : '');

      let progressHTML = '';
      if (isCurrent && nextFloor) {
        const needed = nextFloor.minutesRequired - floor.minutesRequired;
        const done = state.totalMinutes - floor.minutesRequired;
        const pct = Math.min(100, (done / needed) * 100);
        progressHTML = `
          <div class="floor-progress">
            <div class="floor-progress-bar" style="width:${pct}%"></div>
          </div>
          <div class="shop-card-desc">${state.totalMinutes}/${nextFloor.minutesRequired} min to next floor</div>
        `;
      }

      el.innerHTML = `
        <div class="floor-number">${floor.id}</div>
        <div class="floor-info">
          <div class="floor-name">${floor.name}</div>
          <div class="floor-desc">${floor.desc}</div>
          ${progressHTML}
        </div>
        <div class="floor-icon">${floor.icon}</div>
      `;

      els.towerContainer.appendChild(el);
    });
  }

  // ===== STATS =====
  function renderStats() {
    $('#stat-total-sessions').textContent = state.totalSessions;
    $('#stat-total-hours').textContent = (state.totalMinutes / 60).toFixed(1);
    $('#stat-longest-session').textContent = state.longestSession;
    $('#stat-current-streak').textContent = state.streak;
    $('#stat-total-fish').textContent = state.totalFishEarned;
    $('#stat-items-owned').textContent = state.ownedItems.length;

    // Weekly chart
    renderWeeklyChart();
  }

  function renderWeeklyChart() {
    const bars = $('#weekly-bars');
    bars.innerHTML = '';

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();
    const todayDay = today.getDay();

    // Get last 7 days
    const weekData = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const key = d.toISOString().split('T')[0];
      weekData.push({
        label: days[d.getDay()],
        minutes: state.weeklyMinutes[key] || 0,
        isToday: i === 0,
      });
    }

    const maxMin = Math.max(1, ...weekData.map(d => d.minutes));

    weekData.forEach(d => {
      const bar = document.createElement('div');
      bar.className = 'chart-bar' + (d.isToday ? ' today' : '');

      const height = Math.max(4, (d.minutes / maxMin) * 100);

      bar.innerHTML = `
        <div class="chart-bar-value">${d.minutes}m</div>
        <div class="chart-bar-fill" style="height:${height}px"></div>
        <div class="chart-bar-label">${d.label}</div>
      `;

      bars.appendChild(bar);
    });
  }

  // ===== WINDOW TIME =====
  function updateWindowTime() {
    const hour = new Date().getHours();
    const isNight = hour < 6 || hour >= 20;
    els.windowSky.classList.toggle('night', isNight);
  }

  // ===== SPEECH =====
  let speechTimeout;
  function showSpeech(text) {
    clearTimeout(speechTimeout);
    els.speechText.textContent = text;
    els.speechBubble.classList.add('show');

    speechTimeout = setTimeout(() => {
      els.speechBubble.classList.remove('show');
    }, 4000);
  }

  // ===== TOAST =====
  function showToast(message, type = '') {
    const container = $('#toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast ' + type;
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => toast.remove(), 3000);
  }

  // ===== UTILS =====
  function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // ===== GO =====
  init();
})();
