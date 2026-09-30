(() => {
  const order = ["quota", "activate", "confirm", "bindcard", "success"];
  const meta = {
    quota: {
      src: "assets/works/finance/proto/quota.png",
      title: "额度中心",
      hint: "点卡内「立即借款」→ 激活额度；点底部福利条 → 绑卡",
      spots: [
        { cls: "hs-quota-cta", to: "activate", label: "立即借款" },
        { cls: "hs-quota-banner", to: "bindcard", label: "绑定银行卡福利" },
      ],
      back: null,
    },
    activate: {
      src: "assets/works/finance/proto/activate.png",
      title: "激活额度",
      hint: "点「下一步：人脸识别」→ 确认借款；左上返回额度中心",
      spots: [
        { cls: "hs-activate-cta", to: "confirm", label: "下一步：人脸识别" },
      ],
      back: "quota",
    },
    confirm: {
      src: "assets/works/finance/proto/confirm.png",
      title: "确认借款",
      hint: "点「确认借款并放款」→ 绑卡；也可点收款账户行改绑卡",
      spots: [
        { cls: "hs-confirm-cta", to: "bindcard", label: "确认借款并放款" },
        { cls: "hs-confirm-account", to: "bindcard", label: "收款账户" },
      ],
      back: "activate",
    },
    bindcard: {
      src: "assets/works/finance/proto/bindcard.png",
      title: "绑定银行卡",
      hint: "点「同意协议并绑定」→ 放款成功；左上返回确认借款",
      spots: [
        { cls: "hs-bind-cta", to: "success", label: "同意协议并绑定" },
      ],
      back: "confirm",
    },
    success: {
      src: "assets/works/finance/proto/success.png",
      title: "放款成功",
      hint: "点「查看账单」回额度中心；「立即还款」也可回到额度中心重走",
      spots: [
        { cls: "hs-success-bill", to: "quota", label: "查看账单" },
        { cls: "hs-success-repay", to: "quota", label: "立即还款" },
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

  show("quota");
})();
