(() => {
  const order = ["quota", "activate", "confirm", "bindcard", "success"];
  const meta = {
    quota: {
      src: "assets/works/finance/proto/quota.png",
      title: "额度中心",
      hint: "点击橙色「立即借款」进入激活额度",
      hotspot: "hs-main-cta",
      next: "activate",
      back: null,
    },
    activate: {
      src: "assets/works/finance/proto/activate.png",
      title: "激活额度",
      hint: "完成手机验证与身份认证后，点「下一步：人脸识别」进入确认借款",
      hotspot: "hs-activate-cta",
      next: "confirm",
      back: "quota",
    },
    confirm: {
      src: "assets/works/finance/proto/confirm.png",
      title: "确认借款",
      hint: "调节金额后，点「确认借款并放款」进入绑卡",
      hotspot: "hs-confirm-cta",
      next: "bindcard",
      back: "activate",
    },
    bindcard: {
      src: "assets/works/finance/proto/bindcard.png",
      title: "绑定银行卡",
      hint: "填写卡号与验证码后，点「同意协议并绑定」查看放款结果",
      hotspot: "hs-bind-cta",
      next: "success",
      back: "confirm",
    },
    success: {
      src: "assets/works/finance/proto/success.png",
      title: "放款成功",
      hint: "闭环完成。可点左侧步骤回到额度中心重新体验",
      hotspot: null,
      next: null,
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
    btn.dataset.action = action;
    btn.setAttribute("aria-label", label);
    btn.addEventListener("click", () => {
      if (action === "next" && meta[current].next) show(meta[current].next);
      if (action === "back" && meta[current].back) show(meta[current].back);
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
    if (m.back) addHotspot("hs-back", "back", "返回上一屏");
    if (m.hotspot) addHotspot(m.hotspot, "next", "下一步");
  };

  steps.forEach((btn) => {
    btn.addEventListener("click", () => show(btn.dataset.screen));
  });

  // keyboard
  document.addEventListener("keydown", (e) => {
    const i = order.indexOf(current);
    if (e.key === "ArrowRight" && i < order.length - 1) show(order[i + 1]);
    if (e.key === "ArrowLeft" && i > 0) show(order[i - 1]);
  });

  show("quota");
})();
