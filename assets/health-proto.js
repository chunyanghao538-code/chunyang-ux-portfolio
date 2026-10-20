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
      hint: "点功能卡片或「开始体验」→ 选择记录方式；也可点右上「跳过」",
      spots: [
        { cls: "hs-hp-skip", to: "method", label: "跳过" },
        { cls: "hs-hp-onboard-card1", to: "method", label: "轻量记录" },
        { cls: "hs-hp-onboard-card2", to: "method", label: "每日获得反馈" },
        { cls: "hs-hp-onboard-card3", to: "method", label: "找到一个小改变" },
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
      hint: "点「查看进度」→ 画像；「开始今日记录」或三卡进入录入；「去连接」→ 授权",
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
      hint: "点入睡/起床时间打开选择器；点睡眠感受标签切换；保存 → 饮食",
      spots: [
        { cls: "hs-hp-sleep-bedtime", to: "popTime", label: "入睡时间" },
        { cls: "hs-hp-sleep-wake", to: "popTime", label: "起床时间" },
        { cls: "hs-hp-sleep-feel1", toggle: "feel", label: "有精神" },
        { cls: "hs-hp-sleep-feel2", toggle: "feel", label: "一般", on: true },
        { cls: "hs-hp-sleep-feel3", toggle: "feel", label: "疲惫" },
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
      hint: "滚动日期/小时/分钟滚轮选择，再点「确认时间」回睡眠记录",
      spots: [
        { cls: "hs-hp-time-cancel", to: "sleep", label: "取消" },
        { cls: "hs-hp-time-confirm", to: "sleep", label: "确认时间" },
      ],
      back: "sleep",
      timePicker: true,
    },
    diet: {
      src: "assets/works/health/proto/diet.png",
      title: "饮食记录",
      hint: "点早/午/晚餐切换；点「吃了」与食物类别多选；保存 → 运动",
      spots: [
        { cls: "hs-hp-diet-sleep-row", to: "sleep", label: "睡眠记录" },
        { cls: "hs-hp-diet-meal1", toggle: "meal", label: "早餐", on: true },
        { cls: "hs-hp-diet-meal2", toggle: "meal", label: "午餐" },
        { cls: "hs-hp-diet-meal3", toggle: "meal", label: "晚餐" },
        { cls: "hs-hp-diet-ate", toggle: "ate", label: "吃了", on: true },
        { cls: "hs-hp-diet-skip", toggle: "ate", label: "未吃这餐" },
        { cls: "hs-hp-diet-cat1", toggle: "cat", multi: true, label: "谷薯主食", on: true },
        { cls: "hs-hp-diet-cat2", toggle: "cat", multi: true, label: "蔬菜类" },
        { cls: "hs-hp-diet-cat3", toggle: "cat", multi: true, label: "水果类" },
        { cls: "hs-hp-diet-cat4", toggle: "cat", multi: true, label: "鱼肉蛋类", on: true },
        { cls: "hs-hp-diet-cat5", toggle: "cat", multi: true, label: "奶及豆类", on: true },
        { cls: "hs-hp-diet-cat6", toggle: "cat", multi: true, label: "坚果类" },
        { cls: "hs-hp-diet-ex-row", to: "exercise", label: "运动记录" },
        { cls: "hs-hp-diet-voice", to: "voice", label: "语音整理" },
        { cls: "hs-hp-diet-save", to: "exercise", label: "保存记录" },
      ],
      back: "sleep",
    },
    exercise: {
      src: "assets/works/health/proto/exercise.png",
      title: "运动录入",
      hint: "点是否运动、活动类型；用 +/- 调时长；保存 → 记录完成弹窗",
      spots: [
        { cls: "hs-hp-ex-sleep-row", to: "sleep", label: "睡眠记录" },
        { cls: "hs-hp-ex-diet-row", to: "diet", label: "饮食记录" },
        { cls: "hs-hp-ex-yes", toggle: "exyes", label: "有运动", on: true },
        { cls: "hs-hp-ex-no", toggle: "exyes", label: "暂无运动" },
        { cls: "hs-hp-ex-type1", toggle: "extype", label: "散步", on: true },
        { cls: "hs-hp-ex-type2", toggle: "extype", label: "跑步" },
        { cls: "hs-hp-ex-type3", toggle: "extype", label: "骑行" },
        { cls: "hs-hp-ex-type4", toggle: "extype", label: "力量训练" },
        { cls: "hs-hp-ex-type5", toggle: "extype", label: "球类运动" },
        { cls: "hs-hp-ex-type6", toggle: "extype", label: "其他" },
        { cls: "hs-hp-ex-minus", action: "duration", delta: -5, label: "减少时长" },
        { cls: "hs-hp-ex-plus", action: "duration", delta: 5, label: "增加时长" },
        { cls: "hs-hp-ex-voice", to: "voice", label: "语音整理" },
        { cls: "hs-hp-ex-save", to: "popDone", label: "保存记录" },
      ],
      back: "diet",
    },
    popDone: {
      src: "assets/works/health/proto/pop-done.png",
      title: "记录完成弹窗",
      hint: "点「查看今日概况」或「返回首页」→ 第1天完成首页",
      spots: [
        { cls: "hs-hp-popdone-view", to: "homeDone", label: "查看今日概况" },
        { cls: "hs-hp-popdone-home", to: "homeDone", label: "返回首页" },
      ],
      back: "exercise",
    },
    voice: {
      src: "assets/works/health/proto/voice.png",
      title: "语音录入",
      hint: "点「结束录入并核对」→ 确认页；取消回睡眠",
      spots: [
        { cls: "hs-hp-voice-finish", to: "voiceConfirm", label: "结束录入并核对" },
        { cls: "hs-hp-voice-cancel", to: "sleep", label: "取消，改用手动填写" },
      ],
      back: "home",
    },
    voiceConfirm: {
      src: "assets/works/health/proto/voice-confirm.png",
      title: "确认语音记录",
      hint: "点「确认并保存」→ 完成弹窗；「重新录音」回语音",
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
      hint: "点「查看进度」→ 画像不足；可修改各记录或回底栏画像",
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
      hint: "点补充入口回录入，或「先查看已有记录」→ 完整画像",
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
      hint: "点「查看画像」→ 三日健康画像；可修改记录",
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
      hint: "点「每日睡觉提醒」→ 作息提醒弹窗；底栏可回今日",
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
      hint: "点「保存提醒」或「取消」回画像；可切换提醒开关与重复方式",
      spots: [
        { cls: "hs-hp-remind-close", to: "portrait", label: "关闭" },
        { cls: "hs-hp-remind-toggle", toggle: "rm-on", label: "开启提醒", on: true },
        { cls: "hs-hp-remind-rep1", toggle: "rm-rep", label: "每天", on: true },
        { cls: "hs-hp-remind-rep2", toggle: "rm-rep", label: "工作日" },
        { cls: "hs-hp-remind-rep3", toggle: "rm-rep", label: "自定义" },
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
  let durationMin = 30;
  const toggleState = {};

  const dates = ["10月11日", "10月12日", "10月13日", "10月14日", "10月15日", "10月16日", "10月17日"];
  const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));
  const mins = Array.from({ length: 12 }, (_, i) => String(i * 5).padStart(2, "0"));
  let timeSel = { date: 2, hour: 23, min: 6 };

  const clearHotspots = () => {
    screen.querySelectorAll(".phone-hotspot, .hp-time-picker, .hp-duration-badge").forEach((el) => el.remove());
  };

  const go = (id) => {
    if (meta[id]) show(id);
  };

  const syncToggleVisual = () => {
    screen.querySelectorAll(".phone-hotspot[data-toggle]").forEach((el) => {
      const group = el.dataset.toggle;
      const key = el.dataset.key;
      const on = toggleState[group] && toggleState[group][key];
      el.classList.toggle("is-on", !!on);
    });
  };

  const addHotspot = (spot) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `phone-hotspot ${spot.cls}`;
    btn.setAttribute("aria-label", spot.label);
    btn.title = spot.label;

    if (spot.toggle) {
      const group = spot.toggle;
      const key = spot.cls;
      if (!toggleState[group]) toggleState[group] = {};
      if (toggleState[group][key] === undefined) toggleState[group][key] = !!spot.on;
      btn.dataset.toggle = group;
      btn.dataset.key = key;
      btn.classList.toggle("is-on", !!toggleState[group][key]);
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (spot.multi) {
          toggleState[group][key] = !toggleState[group][key];
        } else {
          Object.keys(toggleState[group]).forEach((k) => {
            toggleState[group][k] = false;
          });
          toggleState[group][key] = true;
        }
        syncToggleVisual();
      });
    } else if (spot.action === "duration") {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        durationMin = Math.max(5, Math.min(180, durationMin + (spot.delta || 0)));
        const badge = screen.querySelector(".hp-duration-badge");
        if (badge) badge.textContent = `${durationMin} 分钟`;
      });
    } else {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        go(spot.to);
      });
    }
    screen.appendChild(btn);
  };

  const buildWheel = (items, selected, onChange) => {
    const col = document.createElement("div");
    col.className = "hp-wheel-col";
    const list = document.createElement("div");
    list.className = "hp-wheel-list";
    const itemH = 36;
    const apply = (i) => {
      const idx = Math.max(0, Math.min(items.length - 1, i));
      list.querySelectorAll(".hp-wheel-item").forEach((el, j) => el.classList.toggle("on", j === idx));
      onChange(idx);
      updateTimeSummary();
      return idx;
    };
    items.forEach((text, i) => {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "hp-wheel-item" + (i === selected ? " on" : "");
      item.textContent = text;
      item.dataset.i = String(i);
      item.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        list.scrollTo({ top: apply(i) * itemH, behavior: "smooth" });
      });
      list.appendChild(item);
    });
    col.appendChild(list);
    list.addEventListener("scroll", () => {
      window.clearTimeout(list._t);
      list._t = window.setTimeout(() => apply(Math.round(list.scrollTop / itemH)), 80);
    });
    requestAnimationFrame(() => {
      list.scrollTop = selected * itemH;
    });
    return col;
  };

  const updateTimeSummary = () => {
    const el = screen.querySelector(".hp-time-summary");
    if (!el) return;
    el.textContent = `已选择：${dates[timeSel.date]} ${hours[timeSel.hour]}:${mins[timeSel.min]}`;
  };

  const mountTimePicker = () => {
    const wrap = document.createElement("div");
    wrap.className = "hp-time-picker";
    wrap.innerHTML = '<div class="hp-wheels"><div class="hp-wheel-hi" aria-hidden="true"></div></div><p class="hp-time-summary"></p>';
    const wheels = wrap.querySelector(".hp-wheels");
    wheels.appendChild(
      buildWheel(dates, timeSel.date, (i) => {
        timeSel.date = i;
      })
    );
    wheels.appendChild(
      buildWheel(hours, timeSel.hour, (i) => {
        timeSel.hour = i;
      })
    );
    wheels.appendChild(
      buildWheel(mins, timeSel.min, (i) => {
        timeSel.min = i;
      })
    );
    screen.appendChild(wrap);
    updateTimeSummary();
  };

  const mountDurationBadge = () => {
    const badge = document.createElement("div");
    badge.className = "hp-duration-badge";
    badge.textContent = `${durationMin} 分钟`;
    screen.appendChild(badge);
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
    if (m.back) addHotspot({ cls: "hs-back", to: m.back, label: "返回上一屏" });
    (m.spots || []).forEach((s) => addHotspot(s));
    if (m.timePicker) mountTimePicker();
    if (id === "exercise") mountDurationBadge();
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
