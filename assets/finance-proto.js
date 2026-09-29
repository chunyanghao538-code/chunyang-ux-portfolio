(() => {
  const order = ["quota", "activate", "confirm", "bindcard", "success"];
  const meta = {
    quota: {
      src: "assets/works/finance/proto/quota.png",
      title: "额度中心",
      hint: "点橙色卡内「立即借款」进入激活；或点底部福利条去绑卡",
      spots: [
        { cls: "hs-quota-cta", action: "activate", label: "立即借款" },
        { cls: "hs-quota-banner", action: "bindcard", label: "绑定银行卡福利" },
      ],
      back: null,
    },
    activate: {
      src: "assets/works/finance/proto/activate.png",
      title: "激活额度",
      hint: "点「下一步：人脸识别」进入确认借款（热区避开底部导航）",
      spots: [
        { cls: "hs-activate-cta", action: "confirm", label: "下一步：人脸识别" },
      ],
      back: "quota",
    },
    confirm: {
      src: "assets/works/finance/proto/confirm.png",
      title: "确认借款",
      hint: "点「确认借款并放款」进入绑定银行卡",
      spots: [
        { cls: "hs-confirm-cta", action: "bindcard", label: "确认借款并放款" },
      ],
      back: "activate",
    },
    bindcard: {
      src: "assets/works/finance/proto/bindcard.png",
      title: "绑定银行卡",
      hint: "点「同意协议并绑定」查看放款成功",
      spots: [
        { cls: "hs-bind-cta", action: "success", label: "同意协议并绑定" },
      ],
      back: "confirm",
    },
    success: {
      src: "assets/works/finance/proto/success.png",
      title: "放款成功",
      hint: "闭环完成。点「查看账单」回额度中心，或左侧步骤重走流程",
      spots: [
        { cls: "hs-success-bill", action: "quota", label: "查看账单" },
      ],
      back: "bindcard",
    },
  };

  const img = document.getElementById("proto-img");
  const hint = document.getElementById("proto-hint");
  const screen = document.getElementById("phone-screen");
  const steps = document.querySelectorAll("#proto-steps button");
  if (!img || !screen) return;

  let current = "quota";

  const clearHotspots = () => {
    screen.querySelectorAll(".phone-hotspot").forEach((el) => el.remove());
  };

  const addHotspot = (cls, action, label) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `phone-hotspot ${cls}`;
    btn.setAttribute("aria-label", label);
    btn.title = label;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (meta[action] || order.includes(action)) show(action);
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
    (m.spots || []).forEach((s) => addHotspot(s.cls, s.action, s.label));
  };

  steps.forEach((btn) => {
    btn.addEventListener("click", () => show(btn.dataset.screen));
  });

  document.addEventListener("keydown", (e) => {
    const i = order.indexOf(current);
    if (e.key === "ArrowRight" && i < order.length - 1) show(order[i + 1]);
    if (e.key === "ArrowLeft" && i > 0) show(order[i - 1]);
  });

  // After image loads, ensure layout uses natural height
  img.addEventListener("load", () => {
    screen.style.aspectRatio = "auto";
  });

  show("quota");
})();
