const DEMOS = [
  {
    kicker: "REAL CALENDAR",
    title: "会议进入日历，准备自动开始",
    number: "<01>",
    status: "正在识别会议上下文",
    points: [
      "从用户真实导入的会议出发，不需要重新创建任务",
      "根据会议时间与准备规则，在合适的时刻自动启动",
      "用户始终能看到当前状态，也可以随时跳过或接管",
    ],
    scene: `
      <div class="scene-enter">
        <div class="scene-head">
          <div><small>TOMORROW · 10:00</small><strong>产品战略评审会</strong></div>
          <span class="status-chip">准备已启动</span>
        </div>
        <div class="calendar-scene">
          <div class="mini-calendar">
            <div class="week-row"><span>一</span><span>二</span><b>三</b><span>四</span><span>五</span></div>
            <div class="meeting-card">
              <small>10:00 — 11:30</small>
              <strong>产品战略评审会</strong>
              <span>5 位参会者 · 3 份关联材料</span>
            </div>
          </div>
          <div class="prep-lane">
            <div class="prep-lane-title"><span>自动准备计划</span><small>提前 12 小时</small></div>
            <div class="lane-step"><i>1</i><span>理解会议目标</span><em>进行中</em></div>
            <div class="lane-step"><i>2</i><span>读取关联材料</span><em>等待</em></div>
            <div class="lane-step"><i>3</i><span>组织会前成果</span><em>等待</em></div>
          </div>
        </div>
      </div>`,
  },
  {
    kicker: "AUTO LOOP",
    title: "主动读材料，也主动判断下一步",
    number: "<02>",
    status: "正在核验关键问题",
    points: [
      "围绕当前会议目标，自主选择信息增益最高的下一步",
      "读取会议附件、历史决定和最新进展，而不是只看标题",
      "每轮行动后检查证据缺口，直到足够交付或触达边界",
    ],
    scene: `
      <div class="scene-enter">
        <div class="scene-head">
          <div><small>AUTO LOOP · ROUND 03</small><strong>核验上线范围与数据口径</strong></div>
          <span class="status-chip">4 / 6 来源已读</span>
        </div>
        <div class="research-field">
          <span class="source-pill one"><i>日</i>会议说明</span>
          <span class="source-pill two"><i>档</i>灰度方案 v4</span>
          <span class="source-pill three"><i>数</i>本周指标</span>
          <span class="source-pill four"><i>纪</i>上次会议决定</span>
          <div class="research-center">
            <div class="agent-brain"><span class="agent-icon">✦</span><div><strong>当前任务理解</strong><small>证据增加后持续修正</small></div></div>
            <div class="loop-line"></div>
          </div>
          <div class="research-question"><span></span>下一步：确认新版方案是否改变灰度准入条件</div>
        </div>
      </div>`,
  },
  {
    kicker: "EVIDENCE CHANGES THE PLAN",
    title: "发现理解不对，就主动改变准备方向",
    number: "<03>",
    status: "已根据新证据改判",
    points: [
      "初始判断不是结论，正文证据可以推翻它",
      "只刷新受影响的内容，不破坏用户已经审核或固定的事实",
      "解释改了什么、为什么改，以及还有哪些缺口",
    ],
    scene: `
      <div class="scene-enter">
        <div class="scene-head">
          <div><small>HYPOTHESIS UPDATE</small><strong>新证据改变了准备任务</strong></div>
          <span class="status-chip">变更可追溯</span>
        </div>
        <div class="evidence-trigger"><span>📄</span><div><b>《灰度方案 v4》出现关键变化</b><br>本次会议需要确定上线范围，不是常规进展同步。</div></div>
        <div class="change-layout">
          <div class="change-panel old"><small>原任务理解</small><h4>汇报本周常规进展</h4><p>按项目模块整理状态和完成事项。</p></div>
          <div class="change-arrow">→</div>
          <div class="change-panel new"><small>新的任务理解</small><h4>核对口径并推动范围决策</h4><p>整理两个可选范围、关键风险与三个待确认问题。</p></div>
        </div>
      </div>`,
  },
  {
    kicker: "MEETING READY",
    title: "打开就是能带进会议的成果",
    number: "<04>",
    status: "等待你的最后确认",
    points: [
      "90 秒速览、可讲述内容、判断与问题共享同一事实集合",
      "关键表述带有来源，事实、推断与未知项清楚分开",
      "用户可继续纠偏，变化形成新版本而不是覆盖旧稿",
    ],
    scene: `
      <div class="scene-enter">
        <div class="scene-head">
          <div><small>PREPARATION V3</small><strong>会前成果已生成</strong></div>
          <span class="status-chip">待你确认</span>
        </div>
        <div class="delivery-preview">
          <div class="delivery-nav"><span class="is-active">90 秒速览</span><span>可直接讲述</span><span>判断与风险</span><span>证据详情</span></div>
          <div class="delivery-body">
            <h4>你需要推动的决定</h4>
            <p class="talking-line">建议把首批范围收敛到高频场景，并明确第二阶段进入条件。</p>
            <p class="talking-line">会上需要先统一指标口径，再比较两个方案的收益与风险。</p>
            <p class="talking-line">仍需确认：依赖团队能否在本周五前完成权限改造。</p>
            <div class="source-tags"><span class="tiny-chip">✓ 方案 v4</span><span class="tiny-chip">✓ 指标周报</span><span class="tiny-chip">✓ 上次决定</span></div>
          </div>
        </div>
        <div class="ready-banner"><span><b>●</b> 重要事实均可回到来源</span><span>准备完成 87%</span></div>
      </div>`,
  },
];

const CAPABILITIES = [
  {
    kicker: "01 · TASK UNDERSTANDING",
    title: "先理解这次真正要解决什么",
    description: "角色、标题和历史只是线索。Agent 会结合新证据持续修正任务，把注意力从“汇报进展”转向真正需要推动的决定。",
    points: ["识别会议目标与当前角色", "证据改变时主动改判"],
  },
  {
    kicker: "02 · EVIDENCE REVIEW",
    title: "把关键结论逐条核验清楚",
    description: "系统会打开真正相关的材料，区分事实、推断和未知项。每个重要判断都能回到来源，缺失的信息则明确留给会上确认。",
    points: ["只用成功读取的材料支撑结论", "来源、时间与缺口清晰可见"],
  },
  {
    kicker: "03 · MEETING READY",
    title: "交付会上能直接使用的内容",
    description: "最终得到的不是一篇需要再次加工的摘要，而是围绕同一组事实组织好的主张、风险、问题与可直接讲述的 90 秒速览。",
    points: ["重要信息按决策顺序组织", "继续对话即可纠偏并形成新版本"],
  },
];

const tabs = Array.from(document.querySelectorAll("[data-demo-index]"));
const scene = document.querySelector("[data-scene]");
const kicker = document.querySelector("[data-demo-kicker]");
const title = document.querySelector("[data-demo-title]");
const points = document.querySelector("[data-demo-points]");
const number = document.querySelector("[data-demo-number]");
const status = document.querySelector("[data-demo-status]");
const timeline = document.querySelector("[data-demo-timeline]");
const playToggle = document.querySelector("[data-play-toggle]");
const header = document.querySelector("[data-header]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const capabilityCards = Array.from(document.querySelectorAll("[data-capability-card]"));
const capabilitySelectors = Array.from(document.querySelectorAll("[data-capability-select]"));
const capabilityShowcase = document.querySelector("[data-capability-showcase]");
const capabilityKicker = document.querySelector("[data-capability-kicker]");
const capabilityTitle = document.querySelector("[data-capability-title]");
const capabilityDescription = document.querySelector("[data-capability-description]");
const capabilityPoints = document.querySelector("[data-capability-points]");
const capabilityNext = document.querySelector("[data-capability-next]");
const capabilityStory = document.querySelector(".capability-story");

let activeIndex = 0;
let timer = null;
let paused = reduceMotion.matches;
let demoInView = false;
let activeCapability = 0;

function renderDemo(index, { focus = false } = {}) {
  const demo = DEMOS[index];
  activeIndex = index;

  tabs.forEach((tab, tabIndex) => {
    const active = tabIndex === index;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    if (active && focus) tab.focus();
  });

  kicker.textContent = demo.kicker;
  title.textContent = demo.title;
  points.innerHTML = demo.points.map((point) => `<li>${point}</li>`).join("");
  number.textContent = demo.number;
  status.textContent = demo.status;
  scene.innerHTML = demo.scene;

  restartTimeline();
}

function renderCapability(index, { focus = false } = {}) {
  const capability = CAPABILITIES[index];
  activeCapability = index;
  capabilityShowcase.dataset.activeCapability = String(index);

  capabilityCards.forEach((card, cardIndex) => {
    const active = cardIndex === index;
    card.classList.toggle("is-active", active);
    card.setAttribute("aria-pressed", String(active));
  });

  capabilitySelectors.forEach((selector, selectorIndex) => {
    const active = selectorIndex === index;
    selector.classList.toggle("is-active", active);
    selector.setAttribute("aria-selected", String(active));
    selector.tabIndex = active ? 0 : -1;
    if (active && focus) selector.focus();
  });

  capabilityKicker.textContent = capability.kicker;
  capabilityTitle.textContent = capability.title;
  capabilityDescription.textContent = capability.description;
  capabilityPoints.innerHTML = capability.points.map((point) => `<li>${point}</li>`).join("");

  if (!reduceMotion.matches) {
    capabilityStory.animate(
      [
        { opacity: 0.55, transform: "translateY(7px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 300, easing: "cubic-bezier(.2,.8,.2,1)" },
    );
  }
}

function restartTimeline() {
  timeline.classList.remove("is-running");
  void timeline.offsetWidth;
  if (!paused && demoInView) timeline.classList.add("is-running");
}

function scheduleNext() {
  window.clearInterval(timer);
  if (paused || !demoInView) return;
  timer = window.setInterval(() => {
    renderDemo((activeIndex + 1) % DEMOS.length);
  }, 6400);
}

function setPaused(nextPaused) {
  paused = nextPaused;
  playToggle.setAttribute("aria-pressed", String(paused));
  playToggle.setAttribute("aria-label", paused ? "继续自动演示" : "暂停自动演示");
  restartTimeline();
  scheduleNext();
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    renderDemo(index);
    scheduleNext();
  });

  tab.addEventListener("keydown", (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;
    renderDemo(nextIndex, { focus: true });
    scheduleNext();
  });
});

playToggle.addEventListener("click", () => setPaused(!paused));

capabilityCards.forEach((card, index) => {
  card.addEventListener("click", () => renderCapability(index));
  card.addEventListener("focus", () => renderCapability(index));
  card.addEventListener("mouseenter", () => renderCapability(index));
});

capabilitySelectors.forEach((selector, index) => {
  selector.addEventListener("click", () => renderCapability(index));
  selector.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + capabilitySelectors.length) % capabilitySelectors.length;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % capabilitySelectors.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = capabilitySelectors.length - 1;
    renderCapability(nextIndex, { focus: true });
  });
});

capabilityNext.addEventListener("click", () => {
  renderCapability((activeCapability + 1) % CAPABILITIES.length);
});

const demoObserver = new IntersectionObserver(
  ([entry]) => {
    demoInView = entry.isIntersecting;
    restartTimeline();
    scheduleNext();
  },
  { threshold: 0.28 },
);

demoObserver.observe(document.querySelector("#demo"));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
}, { passive: true });

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    window.clearInterval(timer);
  } else {
    scheduleNext();
  }
});

reduceMotion.addEventListener("change", (event) => setPaused(event.matches));

document.querySelector("[data-year]").textContent = new Date().getFullYear();
renderDemo(0);
renderCapability(0);
