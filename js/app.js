(function () {
  "use strict";

  const SITE = window.SITE;
  const PAGES = SITE.pages;
  const VISIBLE_IN_NAV = 99; // 상단 메뉴에 바로 보일 페이지 수 (넘치는 페이지는 '더보기'로 묶임)

  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const els = {
    topbar: $("#topbar"), nav: $("#nav"), drawer: $("#drawer"), drawerNav: $("#drawerNav"), menuBtn: $("#menuBtn"),
    heroTitle: $("#heroTitle"), heroSub: $("#heroSub"), main: $("#main"),
    searchBtn: $("#searchBtn"), searchLayer: $("#searchLayer"), searchInput: $("#searchInput"),
    searchResults: $("#searchResults"), searchClose: $("#searchClose"), toTop: $("#toTop")
  };

  const countItems = (page) => page.sections.reduce((n, s) => n + s.items.filter((i) => i.url).length, 0);

  function hostOf(url) {
    try { return new URL(url).hostname; } catch (e) { return ""; }
  }

  /* ───────── 메뉴 ───────── */
  function buildNav() {
    const links = [{ id: "", title: "홈", icon: "🏠" }].concat(PAGES);
    const shown = links.slice(0, VISIBLE_IN_NAV + 1);
    const rest = links.slice(VISIBLE_IN_NAV + 1);

    els.nav.innerHTML =
      shown.map((p) => `<a href="#/${p.id}" data-id="${p.id}">${esc(p.title)}</a>`).join("") +
      (rest.length
        ? `<div class="more" id="more">
             <button class="more-btn" aria-haspopup="true" aria-expanded="false">더보기
               <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </button>
             <div class="more-menu">${links.map((p) => `<a href="#/${p.id}" data-id="${p.id}">${esc(p.title)}</a>`).join("")}</div>
           </div>`
        : "");

    els.drawerNav.innerHTML = links
      .map((p) => `<a href="#/${p.id}" data-id="${p.id}"><span class="emoji">${p.icon || "•"}</span>${esc(p.title)}</a>`)
      .join("");

    const more = $("#more");
    if (more) {
      const btn = more.querySelector(".more-btn");
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const open = more.classList.toggle("open");
        btn.setAttribute("aria-expanded", open);
      });
      document.addEventListener("click", () => { more.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); });
    }

    els.menuBtn.addEventListener("click", () => toggleDrawer());
    els.drawerNav.addEventListener("click", (e) => { if (e.target.closest("a")) toggleDrawer(false); });
  }

  function toggleDrawer(force) {
    const open = force ?? els.drawer.hidden;
    els.drawer.hidden = !open;
    els.menuBtn.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
    updateTopbar();
  }

  function markActive(id) {
    document.querySelectorAll("[data-id]").forEach((a) => a.classList.toggle("active", a.dataset.id === id));
    // 좁은 화면에서 탭 줄이 가로로 넘칠 때 현재 탭이 보이도록 이동
    const cur = els.nav.querySelector("a.active");
    if (cur) els.nav.scrollLeft = cur.offsetLeft - (els.nav.clientWidth - cur.offsetWidth) / 2;
  }

  /* ───────── 화면 그리기 ───────── */
  function cardHTML(item) {
    const host = hostOf(item.url);
    const icon = host
      ? `<img src="https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=64" alt="" loading="lazy" onerror="this.replaceWith(document.createTextNode('${esc(item.name.trim().charAt(0))}'))">`
      : esc(item.name.trim().charAt(0));
    const btn = item.url
      ? `<a class="card-btn" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">바로가기
           <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></a>`
      : `<span class="card-btn disabled" aria-disabled="true">준비 중</span>`;
    return `
      <article class="card">
        <div class="card-top">
          <span class="favicon">${icon}</span>
          <div>
            <h4 class="card-name">${esc(item.name)}</h4>
            ${item.tag ? `<span class="tag">${esc(item.tag)}</span>` : ""}
          </div>
        </div>
        ${item.desc ? `<p class="card-desc">${esc(item.desc)}</p>` : ""}
        ${item.detail ? `<p class="card-detail">${esc(item.detail)}</p>` : `<p class="card-detail"></p>`}
        ${item.tip ? `
        <div class="card-tip">
          <span class="card-tip-label">
            <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V16h5.2v-.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            수업 활용 팁
          </span>
          <p>${esc(item.tip)}</p>
        </div>` : ""}
        ${btn}
      </article>`;
  }

  function renderHome() {
    document.title = SITE.title;
    els.heroTitle.textContent = SITE.home.heroTitle;
    els.heroSub.textContent = "";
    const total = PAGES.reduce((n, p) => n + countItems(p), 0);

    els.main.innerHTML = `
      <div class="page">
        <section class="notice-card" aria-labelledby="noticeTitle">
          <h2 id="noticeTitle">📌 이용 안내</h2>
          <ul class="notice-list">${SITE.home.notices.map((n) => `<li>${esc(n)}</li>`).join("")}</ul>
          ${SITE.editUrl ? `<a class="edit-link" href="${esc(SITE.editUrl)}" target="_blank" rel="noopener">✏️ 자료 수정하기 (GitHub)</a>` : ""}
        </section>

        <h2 class="home-heading">자료실 둘러보기</h2>
        <div class="cat-grid">
          ${PAGES.map((p) => `
            <a class="cat-card" href="#/${p.id}">
              <span class="cat-icon" aria-hidden="true">${p.icon || "📁"}</span>
              <span class="cat-title">${esc(p.title)}</span>
              <span class="cat-summary">${esc(p.summary || "")}</span>
              <span class="cat-count">${countItems(p) ? `자료 ${countItems(p)}개 →` : "준비 중 →"}</span>
            </a>`).join("")}
        </div>
        <p class="home-total">총 ${total}개의 사이트·자료가 정리되어 있습니다.</p>
      </div>`;
  }

  function renderPage(page) {
    document.title = `${page.title} - ${SITE.title}`;
    els.heroTitle.textContent = page.title;
    els.heroSub.textContent = page.summary || "";

    const toc = page.sections.length > 1
      ? `<nav class="toc" aria-label="섹션 바로가기">${page.sections
          .map((s, i) => `<a href="#" data-jump="sec-${i}">${esc(s.title)}</a>`).join("")}</nav>`
      : "";

    const intro = page.intro
      ? `<section class="intro">
           <h2>${esc(page.intro.heading)}</h2>
           <p>${esc(page.intro.text)} ${page.intro.source ? `<cite>(출처 : ${esc(page.intro.source)})</cite>` : ""}</p>
         </section>`
      : "";

    const notice = page.notice ? `<div class="page-notice" role="note"><span aria-hidden="true">⚠️</span><span>${esc(page.notice)}</span></div>` : "";

    const sections = page.sections.map((s, i) => {
      const n = s.items.filter((it) => it.url).length;
      return `
        <section class="section" id="sec-${i}">
          <div class="section-head">
            <span class="section-num">${String(i + 1).padStart(2, "0")}</span>
            <h3 class="section-title">${esc(s.title)}</h3>
            ${n ? `<span class="section-count">${n}개</span>` : ""}
          </div>
          ${s.items.length
            ? `<div class="grid">${s.items.map(cardHTML).join("")}</div>`
            : `<p class="empty">아직 등록된 자료가 없습니다. 좋은 자료를 알고 계시면 추가해 주세요 🙂</p>`}
        </section>`;
    }).join("");

    els.main.innerHTML = `<div class="page">${intro}${notice}${toc}${sections}</div>`;
  }

  function route() {
    const id = decodeURIComponent(location.hash.replace(/^#\/?/, "").split("?")[0]);
    const page = PAGES.find((p) => p.id === id);
    if (page) renderPage(page); else renderHome();
    markActive(page ? page.id : "");
    els.searchLayer.hidden = true;
    if (!els.drawer.hidden) toggleDrawer(false);
    document.body.style.overflow = "";
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = "";
    updateTopbar();
  }

  /* 섹션 칩 클릭 → 해당 섹션으로 스크롤 (해시는 페이지 이동용으로 쓰므로 직접 스크롤) */
  els.main.addEventListener("click", (e) => {
    const a = e.target.closest("[data-jump]");
    if (!a) return;
    e.preventDefault();
    document.getElementById(a.dataset.jump)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  /* ───────── 검색 ───────── */
  const index = [];
  PAGES.forEach((p) => p.sections.forEach((s) => s.items.forEach((it) => {
    if (!it.url) return;
    index.push({ ...it, page: p, section: s.title, hay: [it.name, it.desc, it.detail, it.tip, it.tag, s.title, p.title].join(" ").toLowerCase() });
  })));

  let focusIdx = -1;

  function highlight(text, terms) {
    let out = esc(text);
    terms.forEach((t) => {
      if (!t) return;
      out = out.replace(new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"), (m) => `<mark>${m}</mark>`);
    });
    return out;
  }

  function runSearch() {
    const q = els.searchInput.value.trim().toLowerCase();
    focusIdx = -1;
    if (!q) {
      els.searchResults.innerHTML = `<li class="sr-empty">모든 페이지의 ${index.length}개 자료에서 검색합니다.</li>`;
      return;
    }
    const terms = q.split(/\s+/);
    const hits = index.filter((it) => terms.every((t) => it.hay.includes(t)));
    els.searchResults.innerHTML = hits.length
      ? hits.slice(0, 40).map((it) => `
          <li><a href="${esc(it.url)}" target="_blank" rel="noopener noreferrer">
            <span>
              <div class="sr-where">${esc(it.page.title)} › ${esc(it.section)}</div>
              <div class="sr-name">${highlight(it.name, terms)}</div>
              <div class="sr-desc">${highlight(it.desc || "", terms)}</div>
            </span>
          </a></li>`).join("")
      : `<li class="sr-empty">‘${esc(q)}’에 대한 검색 결과가 없습니다.</li>`;
  }

  function openSearch() {
    els.searchLayer.hidden = false;
    document.body.style.overflow = "hidden";
    els.searchInput.value = "";
    runSearch();
    setTimeout(() => els.searchInput.focus(), 0);
  }
  function closeSearch() {
    els.searchLayer.hidden = true;
    document.body.style.overflow = "";
    els.searchBtn.focus();
  }

  els.searchBtn.addEventListener("click", openSearch);
  els.searchClose.addEventListener("click", closeSearch);
  els.searchLayer.addEventListener("click", (e) => { if (e.target === els.searchLayer) closeSearch(); });
  els.searchInput.addEventListener("input", runSearch);
  els.searchInput.addEventListener("keydown", (e) => {
    const links = [...els.searchResults.querySelectorAll("a")];
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!links.length) return;
      focusIdx = (focusIdx + (e.key === "ArrowDown" ? 1 : -1) + links.length) % links.length;
      links.forEach((l, i) => l.classList.toggle("focus", i === focusIdx));
      links[focusIdx].scrollIntoView({ block: "nearest" });
    } else if (e.key === "Enter" && links.length) {
      (links[focusIdx] || links[0]).click();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!els.searchLayer.hidden) closeSearch();
      if (!els.drawer.hidden) toggleDrawer(false);
    }
    if (e.key === "/" && els.searchLayer.hidden && !/input|textarea/i.test(document.activeElement.tagName)) {
      e.preventDefault();
      openSearch();
    }
  });

  /* ───────── 스크롤 효과 ───────── */
  function updateTopbar() {
    const scrolled = window.scrollY > 40;
    els.topbar.classList.toggle("solid", scrolled || !els.drawer.hidden);
    els.toTop.classList.toggle("show", window.scrollY > 600);
  }
  window.addEventListener("scroll", updateTopbar, { passive: true });
  els.toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ───────── 시작 ───────── */
  $("#footerTitle").textContent = SITE.title;
  $("#footerUpdated").textContent = SITE.updated;
  buildNav();
  window.addEventListener("hashchange", route);
  route();
})();
