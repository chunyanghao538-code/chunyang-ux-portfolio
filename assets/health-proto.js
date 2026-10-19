(() => {
  const order = [
    "onboarding",
    "method",
    "auth",
    "home",
    "sleep",
    "popTime",
    "diet",
    "exercise",
    "popDone",
    "voice",
    "voiceConfirm",
    "homeDone",
    "portraitGap",
    "homeReady",
    "portrait",
    "remind",
  ];

  const meta = {
    onboarding: {
      src: "assets/works/health/proto/onboarding.png",
      title: "三日探索引导",
      hint: "点「开始体验」或右上「跳过」→ 选择记录方式",
      spots: [
        { cls: "hs-hp-skip", to: "method", label: "跳过" },
        { cls: "hs-hp-onboard-cta", to: "method", label: "开始体验" },
        { cls: "hs-hp-onboard-privacy", to: "method", label: "了解数据使用方式" },
      ],
      back: null,
    },
    method: {
      src: "assets/works/health/proto/method.png",
      title: "选择记录方式",
      hint: "点「连接设备」卡 → 授权；点「手动记录」或底部按钮 → 今日首页",
      spots: [
        { cls: "hs-hp-method-device", to: "auth", label: "连接设备" },
        { cls: "hs-hp-method-manual", to: "home", label: "手动记录" },
        { cls: "hs-hp-method-cta", to: "home", label: "使用手动记录" },
      ],
      back: "onboarding",
    },
    auth: {
      src: "assets/works/health/proto/auth.png",
      title: "连接健康数据",
      hint: "点「前往系统授权」或「暂不连接，手动记录」→ 今日首页",
      spots: [
        { cls: "hs-hp-auth-cta", to: "home", label: "前往系统授权" },
        { cls: "hs-hp-auth-skip", to: "home", label: "暂不连接，手动记录" },
      ],
      back: "method",
    },
    home: {
      src: "assets/works/health/proto/home.png",
      title: "今日首页",
      hint: "点「开始今日记录」→ 睡眠；「去连接」→ 授权；语音条 → 语音录入；底栏「画像」→ 数据不足态",
      spots: [
        { cls: "hs-hp-home-progress", to: "portraitGap", label: "查看进度" },
        { cls: "hs-hp-home-connect", to: "auth", label: "去连接" },
        { cls: "hs-hp-home-sleep-card", to: "sleep", label: "睡眠待记录" },
        { cls: "hs-hp-home-diet-card", to: "diet", label: "饮食待记录" },
        { cls: "hs-hp-home-ex-card", to: "exercise", label: "运动待记录" },
        { cls: "hs-hp-home-cta", to: "sleep", label: "开始今日记录" },
        { cls: "hs-hp-home-voice", to: "voice", label: "语音整理记录" },
        { cls: "hs-hp-tab-today on", to: "home", label: "今日" },
        { cls: "hs-hp-tab-portrait", to: "portraitGap", label: "画像" },
        { cls: "hs-hp-tab-mine", to: "home", label: "我的" },
      ],
      back: "method",
    },
    sleep: {
      src: "assets/works/health/proto/sleep.png",
      title: "睡眠记录",
      hint: "点入睡/起床时间 → 时间选择弹窗；点「保存记录」→ 饮食；语音条 → 语音录入",
      spots: [
        { cls: "hs-hp-sleep-bedtime", to: "popTime", label: "入睡时间" },
        { cls: "hs-hp-sleep-wake", to: "popTime", label: "起床时间" },
        { cls: "hs-hp-record-diet-row", to: "diet", label: "饮食记录" },
        { cls: "hs-hp-record-ex-row", to: "exercise", label: "运动记录" },
        { cls: "hs-hp-record-voice", to: "voice", label: "语音整理" },
        { cls: "hs-hp-record-save", to: "diet", label: "保存记录" },
      ],
      back: "home",
    },
    popTime: {
      src: "assets/works/health/proto/pop-time.png",
      title: "时间选择弹窗",
      hint: "点「确认时间」回睡眠记录；点「取消」关闭弹窗",
      spots: [
        { cls: "hs-hp-time-cancel", to: "sleep", label: "取消" },
        { cls: "hs-hp-time-confirm", to: "sleep", label: "确认时间" },
      ],
      back: "sleep",
    },
    diet: {
      src: "assets/works/health/proto/diet.png",
      title: "饮食记录",
      hint: "点「保存记录」→ 运动；可点睡眠卡返回；点运动卡进入运动录入",
      spots: [
        { cls: "hs-hp-diet-sleep-row", to: "sleep", label: "睡眠记录" },
        { cls: "hs-hp-diet-ex-row", to: "exercise", label: "运动记录" },
        { cls: "hs-hp-diet-voice", to: "voice", label: "语音整理" },
        { cls: "hs-hp-diet-save", to: "exercise", label: "保存记录" },
      ],
      back: "sleep",
    },
    exercise: {
      src: "assets/works/health/proto/exercise.png",
      title: "运动录入",
      hint: "点「保存记录」→ 首页完成态；可回睡眠/饮食卡；语音条 → 语音录入",
      spots: [
        { cls: "hs-hp-ex-sleep-row", to: "sleep", label: "睡眠记录" },
        { cls: "hs-hp-ex-diet-row", to: "diet", label: "饮食记录" },
        { cls: "hs-hp-ex-voice", to: "voice", label: "语音整理" },
        { cls: "hs-hp-ex-save", to: "popDone", label: "保存记录" },
      ],
      back: "diet",
    },
    popDone: {
      src: "assets/works/health/proto/pop-done.png",
      title: "记录完成弹窗",
      hint: "点「查看今日概况」→ 第1天完成首页；「返回首页」也可进入完成态",
      spots: [
        { cls: "hs-hp-popdone-view", to: "homeDone", label: "查看今日概况" },
        { cls: "hs-hp-popdone-home", to: "homeDone", label: "返回首页" },
      ],
      back: "exercise",
    },
    voice: {
      src: "assets/works/health/proto/voice.png",
      title: "语音录入",
      hint: "点「结束录入并核对」→ 确认页；「取消，改用手动填写」→ 睡眠",
      spots: [
        { cls: "hs-hp-voice-finish", to: "voiceConfirm", label: "结束录入并核对" },
        { cls: "hs-hp-voice-cancel", to: "sleep", label: "取消，改用手动填写" },
      ],
      back: "home",
    },
    voiceConfirm: {
      src: "assets/works/health/proto/voice-confirm.png",
      title: "确认语音记录",
      hint: "点「确认并保存」→ 第1天完成首页；「重新录音」回语音；饮食卡可去补充",
      spots: [
        { cls: "hs-hp-vconfirm-diet", to: "diet", label: "补充饮食" },
        { cls: "hs-hp-vconfirm-retry", to: "voice", label: "重新录音" },
        { cls: "hs-hp-vconfirm-save", to: "popDone", label: "确认并保存" },
      ],
      back: "voice",
    },
    homeDone: {
      src: "assets/works/health/proto/home-done.png",
      title: "第1天完成",
      hint: "点「查看进度」→ 画像不足；「修改今日记录」或各记录行可回录入；底栏「画像」同路径",
      spots: [
        { cls: "hs-hp-done-progress", to: "portraitGap", label: "查看进度" },
        { cls: "hs-hp-done-connect", to: "auth", label: "去连接" },
        { cls: "hs-hp-done-sleep", to: "sleep", label: "睡眠记录" },
        { cls: "hs-hp-done-diet", to: "diet", label: "饮食记录" },
        { cls: "hs-hp-done-ex", to: "exercise", label: "运动记录" },
        { cls: "hs-hp-done-modify", to: "sleep", label: "修改今日记录" },
        { cls: "hs-hp-done-voice", to: "voice", label: "长按语音修改" },
        { cls: "hs-hp-tab-today on", to: "homeDone", label: "今日" },
        { cls: "hs-hp-tab-portrait", to: "portraitGap", label: "画像" },
        { cls: "hs-hp-tab-mine", to: "homeDone", label: "我的" },
      ],
      back: "exercise",
    },
    portraitGap: {
      src: "assets/works/health/proto/portrait-gap.png",
      title: "画像 · 数据不足",
      hint: "点「补充晚餐记录」→ 饮食；「先查看已有记录」→ 完整画像；底栏「今日」回完成首页",
      spots: [
        { cls: "hs-hp-gap-diet", to: "diet", label: "补充饮食" },
        { cls: "hs-hp-gap-sleep", to: "sleep", label: "补充睡眠感受" },
        { cls: "hs-hp-gap-cta", to: "diet", label: "补充晚餐记录" },
        { cls: "hs-hp-gap-view", to: "portrait", label: "先查看已有记录" },
        { cls: "hs-hp-tab-today", to: "homeDone", label: "今日" },
        { cls: "hs-hp-tab-portrait on", to: "portraitGap", label: "画像" },
        { cls: "hs-hp-tab-mine", to: "portraitGap", label: "我的" },
      ],
      back: "homeDone",
    },
    homeReady: {
      src: "assets/works/health/proto/home-ready.png",
      title: "三日完成首页",
      hint: "点「查看画像」→ 三日健康画像；可修改记录或切到底栏画像",
      spots: [
        { cls: "hs-hp-ready-portrait", to: "portrait", label: "查看画像" },
        { cls: "hs-hp-ready-connect", to: "auth", label: "去连接" },
        { cls: "hs-hp-ready-sleep", to: "sleep", label: "睡眠记录" },
        { cls: "hs-hp-ready-diet", to: "diet", label: "饮食记录" },
        { cls: "hs-hp-ready-ex", to: "exercise", label: "运动记录" },
        { cls: "hs-hp-ready-modify", to: "sleep", label: "修改今日记录" },
        { cls: "hs-hp-ready-voice", to: "voice", label: "长按语音修改" },
        { cls: "hs-hp-tab-today on", to: "homeReady", label: "今日" },
        { cls: "hs-hp-tab-portrait", to: "portrait", label: "画像" },
        { cls: "hs-hp-tab-mine", to: "homeReady", label: "我的" },
      ],
      back: "portraitGap",
    },
    portrait: {
      src: "assets/works/health/proto/portrait.png",
      title: "三日健康画像",
      hint: "点「每日睡觉提醒」→ 作息提醒；「手动记录」回录入；底栏「今日」回三日完成首页",
      spots: [
        { cls: "hs-hp-portrait-sleep-edit", to: "sleep", label: "睡眠手动记录" },
        { cls: "hs-hp-portrait-ex-edit", to: "exercise", label: "运动手动记录" },
        { cls: "hs-hp-portrait-remind", to: "remind", label: "每日睡觉提醒" },
        { cls: "hs-hp-tab-today", to: "homeReady", label: "今日" },
        { cls: "hs-hp-tab-portrait on", to: "portrait", label: "画像" },
        { cls: "hs-hp-tab-mine", to: "portrait", label: "我的" },
      ],
      back: "homeReady",
    },
    remind: {
      src: "assets/works/health/proto/remind.png",
      title: "设置睡前提醒",
      hint: "点「保存提醒」或「取消」回画像；右上关闭也可返回",
      spots: [
        { cls: "hs-hp-remind-close", to: "portrait", label: "关闭" },
        { cls: "hs-hp-remind-set", to: "portrait", label: "保存提醒" },
        { cls: "hs-hp-remind-later", to: "portrait", label: "取消" },
      ],
      back: "portrait",
    },
  };

  const img = document.getElementById("proto-img");
  const hint = document.getElementById("proto-hint");
  const screen = document.getElementById("phone-screen");
  const steps = document.querySelectorAll("#proto-steps button");
  if (!img || !screen) return;

  let current = "onboarding";

  const clearHotspots = () => {
    screen.querySelectorAll(".phone-hotspot").forEach((el) => el.remove());
  };

  const go = (id) => {
    if (meta[id]) show(id);
  };

  const addHotspot = (cls, to, label) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `phone-hotspot ${cls}`;
    btn.setAttribute("aria-label", label);
    btn.title = label;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      go(to);
    });
    screen.appendChild(btn);
  };

  const show = (id) => {
    if (!meta[id]) return;
    current = id;
    const m = meta[id];
    img.src = m.src;
    img.alt = m.title;
    hint.innerHTML = `当前：<b>${m.title}</b> — ${m.hint}`;
    steps.forEach((btn) => {
      btn.classList.toggle("on", btn.dataset.screen === id);
    });
    clearHotspots();
    if (m.back) addHotspot("hs-back", m.back, "返回上一屏");
    (m.spots || []).forEach((s) => addHotspot(s.cls, s.to, s.label));
  };

  steps.forEach((btn) => {
    btn.addEventListener("click", () => show(btn.dataset.screen));
  });

  document.addEventListener("keydown", (e) => {
    if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
    const i = order.indexOf(current);
    if (e.key === "ArrowRight" && i < order.length - 1) show(order[i + 1]);
    if (e.key === "ArrowLeft" && i > 0) show(order[i - 1]);
  });

  show("onboarding");
})();
