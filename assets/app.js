(function () {
  const crumbs = {
    home: "工作台 / 我的工作台",
    todo: "工作台 / 待办中心",
    risk: "工作台 / 风险中心",
    ar: "业务管理 / 应收管理 / 总览",
    arLedger: "业务管理 / 应收管理 / 账款",
    arCustomer: "业务管理 / 应收管理 / 客户",
    arCollect: "业务管理 / 应收管理 / 催收任务",
    ap: "业务管理 / 应付管理 / 总览",
    apLedger: "业务管理 / 应付管理 / 账款",
    apVendor: "业务管理 / 应付管理 / 供应商",
    expense: "业务管理 / 费用管理 / 报销审核",
    expenseDetail: "业务管理 / 费用管理 / 明细",
    expenseAlloc: "业务管理 / 费用管理 / 分摊",
    invoice: "业务管理 / 发票管理 / 列表",
    invoiceAbnormal: "业务管理 / 发票管理 / 异常",
    fund: "资金管理",
    close: "核算结账 / 月结中心",
    analytics: "财务分析",
  };

  const drawers = {
    pay: {
      title: "阿里云Q4服务器费用",
      id: "PAY-2310-089",
      html: `
        <div class="stepper">
          <span class="done">1 发起申请</span>
          <span class="done">2 部门审批</span>
          <span class="cur">3 财务审批</span>
        </div>
        <div class="drawer-amount">
          <s style="text-decoration:none;color:#8c9bb3">付款金额</s>
          <b>¥ 125,000.00</b>
          <span class="tag orange">待处理</span>
          <span class="tag red">即将逾期</span>
        </div>
        <div class="kv">
          <div><span>发起人</span><b>王技术</b></div>
          <div><span>对象主体</span><b>阿里云计算有限公司</b></div>
          <div><span>截止日期</span><b>2023-10-24</b></div>
          <div><span>任务类型</span><b>付款审批</b></div>
        </div>
        <div>
          <b style="color:#1f2d45">审批流转</b>
          <div class="timeline" style="margin-top:8px">
            <div>王技术 · 提交申请<br/><span style="color:#8c9bb3">10-20 09:12</span></div>
            <div>李主管 · 部门通过<br/><span style="color:#8c9bb3">10-20 14:30 · 「预算内，同意支出」</span></div>
            <div>郝春阳 · 待财务审批<br/><span style="color:#8c9bb3">当前节点</span></div>
          </div>
        </div>
        <div class="drawer-actions multi">
          <button type="button" class="btn ghost soft">…更多</button>
          <button type="button" class="btn ghost soft">打印单据</button>
          <button type="button" class="btn ghost" data-action="reject">驳回</button>
          <button type="button" class="btn primary" data-action="approve" data-guide="approve-3">同意审批</button>
        </div>`,
    },
    risk: {
      title: "风险核查单",
      id: "RSK-2310-001",
      html: `
        <div>
          <b style="color:#1f2d45;font-size:14px">同供应商连续发票号报销</b>
          <div style="margin-top:8px"><span class="tag red">高危</span></div>
        </div>
        <div class="drawer-amount">
          <s style="text-decoration:none;color:#8c9bb3">风险敞口金额</s>
          <b style="color:#cf1322">¥ 150,000.00</b>
          <div style="margin-top:8px;font-size:11px;color:#8c9bb3;background:#f5f8fc;padding:8px;border-radius:6px">
            触发规则 INV-RULE-003：单次报销含 3 张及以上连续发票号
          </div>
        </div>
        <div>
          <b style="color:#1f2d45">关联单据</b>
          <div class="kv" style="margin-top:8px">
            <div><span>采购报销</span><b>EXP-2310-088</b></div>
            <div><span>增值税专票</span><b>INV-33010192 · 5万</b></div>
            <div><span>增值税专票</span><b>INV-33010193 · 5万</b></div>
            <div><span>增值税专票</span><b>INV-33010194 · 5万</b></div>
          </div>
        </div>
            <div class="advice">
          <b>处置建议</b><br/>
          1. 暂停关联付款流程<br/>
          2. 要求业务补充合同与入库单据<br/>
          3. 核查是否存在拆票规避审批额度
        </div>
        <div class="remark-box">触发引擎：INV-RULE-003 · 连续票号 ≥ 3 · 同供应商同日报销</div>
        <div class="drawer-actions multi">
          <button type="button" class="btn ghost soft">转交他人</button>
          <button type="button" class="btn ghost" data-action="misreport">标为误报</button>
          <button type="button" class="btn primary" data-action="goto-ar" data-guide="riskloop-3">去应收跟进</button>
        </div>`,
    },
    collect: {
      title: "发起催收",
      id: "杭州星耀科技有限公司",
      html: `
        <div class="drawer-amount">
          <s style="text-decoration:none;color:#8c9bb3">逾期金额</s>
          <b style="color:#cf1322">¥ 186,000.00</b>
          <span class="tag red">高风险</span>
          <span class="tag orange">账龄 92 天</span>
        </div>
        <div class="kv">
          <div><span>应收总额</span><b>¥ 420,000.00</b></div>
          <div><span>已收金额</span><b>¥ 234,000.00</b></div>
          <div><span>回款状态</span><b>部分回款</b></div>
          <div><span>最晚到期</span><b>2023-07-28</b></div>
        </div>
        <div class="advice">
          建议：今日发起催收函，并同步销售负责人跟进本周回款计划。
        </div>
        <div class="drawer-actions">
          <button type="button" class="btn ghost" data-action="close">取消</button>
          <button type="button" class="btn primary" data-action="collect-done" data-guide="riskloop-4">确认发起催收</button>
        </div>`,
    },
    closeTask: {
      title: "费用结账阻塞项",
      id: "CLS-2308-EXP",
      html: `
        <div class="drawer-amount">
          <s style="text-decoration:none;color:#8c9bb3">当前进度</s>
          <b>76% → 目标 100%</b>
          <span class="tag orange">费用结账 · 进行中</span>
          <span class="tag red">阻塞 1 项</span>
        </div>
        <div class="kv">
          <div><span>阻塞原因</span><b>差旅报销 TR-3290 缺水单</b></div>
          <div><span>影响范围</span><b>费用结账 / 凭证生成</b></div>
          <div><span>窗口截止</span><b>9 月 5 日</b></div>
          <div><span>责任人</span><b>郝春阳</b></div>
        </div>
        <div class="advice">
          <b>关账建议</b><br/>
          1. 打回 TR-3290 并通知业务补齐附件<br/>
          2. 其余费用单据先完成结转<br/>
          3. 解锁后自动进入「凭证处理」
        </div>
        <div class="drawer-actions">
          <button type="button" class="btn ghost" data-action="close">稍后处理</button>
          <button type="button" class="btn primary" data-action="close-done" data-guide="closeout-3">标记已清理并推进</button>
        </div>`,
    },
    expense: {
      title: "差旅报销单",
      id: "TR-3301",
      html: `
        <div class="stepper">
          <span class="done">1 员工提交</span>
          <span class="done">2 发票匹配</span>
          <span class="cur">3 财务审核</span>
        </div>
        <div class="drawer-amount">
          <s style="text-decoration:none;color:#8c9bb3">报销金额</s>
          <b>¥ 3,260.00</b>
          <span class="tag blue">附件齐全</span>
          <span class="tag green">发票已匹配</span>
        </div>
        <div class="kv">
          <div><span>申请人</span><b>王敏 · 市场部</b></div>
          <div><span>类型</span><b>差旅 · 上海出差</b></div>
          <div><span>行程</span><b>08-18 ~ 08-20</b></div>
          <div><span>成本中心</span><b>MKT-2026</b></div>
        </div>
        <div>
          <b style="color:#1f2d45">费用明细</b>
          <div class="fee-lines">
            <div><span>交通 · 高铁往返</span><b>¥1,120.00</b></div>
            <div><span>住宿 · 2 晚</span><b>¥1,680.00</b></div>
            <div><span>市内交通 / 餐饮</span><b>¥460.00</b></div>
          </div>
        </div>
        <div>
          <b style="color:#1f2d45">附件 / 发票</b>
          <div class="attach-grid">
            <span class="attach-chip">行程单.pdf</span>
            <span class="attach-chip">水单.jpg</span>
            <span class="attach-chip">专票 ×3</span>
          </div>
        </div>
        <div class="advice">
          规则校验通过：无超标项，水单 / 行程单齐全，发票验真成功，可直接通过。
        </div>
        <div class="remark-box">备注：客户拜访与季度复盘会议，已事先报备。</div>
        <div class="drawer-actions multi">
          <button type="button" class="btn ghost soft">…更多</button>
          <button type="button" class="btn ghost soft">打印单据</button>
          <button type="button" class="btn ghost act-danger" data-action="expense-reject">打回</button>
          <button type="button" class="btn primary" data-action="expense-done" data-guide="expense-3">审核通过</button>
        </div>`,
    },
  };

  const panels = {
    home: {
      html: `
        <div class="fos-hello">
          <div>
            <h3>早上好，郝春阳</h3>
            <p>优先处理 <b>3</b> 项高风险与 <b>12</b> 项待办。</p>
          </div>
          <div class="date">2026年8月31日 · 星期一</div>
        </div>

        <div class="kpi5">
          <button type="button" class="kpi-card c1" data-panel="todo" data-guide="approve-1">
            <div class="lab"><span>待处理</span><span class="kpi-ico ico-todo" aria-hidden="true"></span></div>
            <div class="val">12<small>项</small></div>
            <div class="delta up">较昨日 +6</div>
          </button>
          <button type="button" class="kpi-card c2" data-panel="todo">
            <div class="lab"><span>待审核</span><span class="kpi-ico ico-audit" aria-hidden="true"></span></div>
            <div class="val">24<small>项</small></div>
            <div class="delta">较昨日 -3</div>
          </button>
          <button type="button" class="kpi-card c3" data-panel="todo">
            <div class="lab"><span>待付款</span><span class="kpi-ico ico-pay" aria-hidden="true"></span></div>
            <div class="val">8<small>项</small></div>
            <div class="delta up">较昨日 +3</div>
          </button>
          <button type="button" class="kpi-card c4" data-panel="ar">
            <div class="lab"><span>待收款</span><span class="kpi-ico ico-recv" aria-hidden="true"></span></div>
            <div class="val">5<small>项</small></div>
            <div class="delta up">较昨日 +4</div>
          </button>
          <button type="button" class="kpi-card c5" data-panel="todo">
            <div class="lab"><span>待对账</span><span class="kpi-ico ico-recon" aria-hidden="true"></span></div>
            <div class="val">6<small>项</small></div>
            <div class="delta">持平</div>
          </button>
        </div>

        <div class="wb-mid">
          <article class="wb-card">
            <h4>今日待办 <button type="button" class="link" data-panel="todo">查看全部</button></h4>
            <div class="cal-strip">
              <i>20</i><i>21</i><i>22</i><i class="on">23</i><i>24</i><i>25</i><i>26</i>
            </div>
            <div class="task-item">
              <div class="t1"><span>付款审批 · 阿里云Q4服务器费用</span><span class="amt">¥125,000.00</span></div>
              <div class="t2">王技术 · PAY-2310-089 · <em style="color:#cf1322;font-style:normal">即将逾期</em>
                <button type="button" class="link" data-drawer="pay" data-guide="approve-2">审批</button>
              </div>
            </div>
            <div class="task-item">
              <div class="t1"><span>费用报销 · 市场活动</span><span class="amt" style="color:#1677ff">¥12,860.00</span></div>
              <div class="t2">李华 · 截止 10-25
                <button type="button" class="link" data-panel="expense">去审核</button>
              </div>
            </div>
            <div class="task-item">
              <div class="t1"><span>对账处理 · 招商银行</span><span class="amt">¥18,420.00</span></div>
              <div class="t2">系统 · 差异 3 笔
                <button type="button" class="link act-warn" data-panel="risk">处理</button>
              </div>
            </div>
            <div class="task-item">
              <div class="t1"><span>收款确认 · 北京骄宁贸易</span><span class="amt" style="color:#1677ff">¥96,000.00</span></div>
              <div class="t2">张伟 · 待核销
                <button type="button" class="link" data-panel="ar">查看</button>
              </div>
            </div>
          </article>

          <article class="wb-card">
            <h4>财务风险预警 <button type="button" class="link" data-panel="risk" data-guide="riskloop-1">进入风险中心</button></h4>
            <div class="risk-item">
              <b>逾期应收账款</b>
              <p>应收 · 敞口 ¥328 万</p>
              <button type="button" data-panel="ar">查看逾期应收</button>
            </div>
            <div class="risk-item">
              <b>预算超支 · 市场部超 50%</b>
              <p>费用 · 需复核追加单</p>
              <button type="button" data-panel="risk" class="act-warn">核查</button>
            </div>
            <div class="risk-item">
              <b>异常付款 / 发票异常</b>
              <p>连续票号 · 同供应商 · RSK-2310-001</p>
              <button type="button" data-drawer="risk" data-guide="riskloop-2" class="act-warn">打开核查单</button>
            </div>
            <div class="risk-item">
              <b>多账户状态异常</b>
              <p>资金 · 3 个账户待核实</p>
            </div>
          </article>

          <article class="wb-card">
            <h4>收入与成本数据
              <span class="chart-tools" aria-hidden="true"><i>表</i><i>↓</i><i>···</i></span>
            </h4>
            <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:8px;color:#667994">
              <span>收入 <b style="color:#1677ff">11,780.00</b> 万</span>
              <span>成本 <b style="color:#13c2c2">11,610.00</b> 万</span>
            </div>
            <div class="line-chart" aria-hidden="true">
              <span style="height:42%"></span><span style="height:55%"></span>
              <span style="height:48%"></span><span style="height:70%"></span>
              <span style="height:62%"></span><span style="height:58%"></span>
              <span style="height:66%"></span><span style="height:74%"></span>
              <span style="height:68%"></span><span style="height:80%"></span>
              <span style="height:72%"></span><span style="height:86%"></span>
            </div>
            <div class="chart-legend">
              <span class="lg-income">收入</span>
              <span class="lg-cost">成本</span>
              <em>悬停查看月度对比 · Web 端简化为柱状趋势</em>
            </div>
          </article>
        </div>

        <div class="wb-bot">
          <article class="wb-card">
            <h4>月结进度 <button type="button" class="link" data-panel="close" data-guide="closeout-1">进入月结中心</button></h4>
            <div class="ring-row">
              <div class="ring" aria-label="76%"></div>
              <div class="close-list">
                <div><span>应收结账</span><span class="ok">已完成</span></div>
                <div><span>应付结账</span><span class="ok">已完成</span></div>
                <div><span>费用结账</span><span class="ing">进行中 · 阻塞 1</span></div>
                <div><span>资金对账</span><span class="ok">已完成</span></div>
                <div><span>凭证处理</span><span class="wait">未开始</span></div>
                <div><span>结账完成</span><span class="wait">未开始</span></div>
              </div>
            </div>
            <div style="margin-top:10px">
              <button type="button" class="chip primary act-warn" data-panel="close" data-guide="closeout-1">处理阻塞</button>
            </div>
          </article>
          <article class="wb-card">
            <h4>我的常用</h4>
            <div class="fav-grid">
              <button type="button" data-panel="expense" data-guide="expense-1"><b>费用报销</b>审核与支付</button>
              <button type="button" data-panel="ar"><b>应收管理</b>逾期催收跟进</button>
              <button type="button" data-panel="todo"><b>凭证管理</b>待处理凭证入口</button>
            </div>
          </article>
          <article class="wb-card">
            <h4>消息通知</h4>
            <div class="msg-list">
              <div><b>付款申请已通过部门审批</b><span>10:30 · PAY-2310-089</span></div>
              <div><b>对账任务提醒</b><span>09:15 · 招行差异 3 笔</span></div>
              <div><b>预算超支预警</b><span>昨天 · 市场部项目 A</span></div>
              <div><b>系统更新通知</b><span>昨天 · 风险规则库 v2.3</span></div>
            </div>
          </article>
        </div>`,
    },

    todo: {
      html: `
        <div class="page-head-row">
          <div>
            <h3>待办中心</h3>
            <p>任务筛选 · 抽屉审批 · 状态追踪</p>
          </div>
          <div class="page-actions">
            <span class="chip">批量通过</span>
            <span class="chip primary">新建任务</span>
          </div>
        </div>
        <div class="tabs-line" id="todo-tabs">
          <button type="button" class="on" data-tab="pending">待处理 <i class="badge">12</i></button>
          <button type="button" data-tab="soon">即将逾期 <i class="badge red">3</i></button>
          <button type="button" data-tab="reject">已打回 <i class="badge gray">1</i></button>
          <button type="button" data-tab="mine">我发起的 <i class="badge gray">0</i></button>
        </div>
        <div class="filter-bar">
          <span class="fake-input">任务类型</span>
          <span class="fake-input">状态</span>
          <span class="fake-input">2023-10</span>
          <span class="fake-input">对象主体</span>
          <span class="fake-input">风险等级</span>
          <span class="fake-input">发起人 / 单号</span>
          <span class="chip primary">查询</span>
          <span class="chip">重置</span>
        </div>
        <div class="table-wrap">
          <table class="fos-table">
            <thead>
              <tr>
                <th></th><th>任务类型</th><th>任务名称</th><th>业务单号</th>
                <th>金额</th><th>发起人</th><th>风险等级</th><th>状态</th><th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr class="row-active">
                <td>☐</td>
                <td><span class="tag blue">付款审批</span></td>
                <td>阿里云Q4服务器费用</td>
                <td>PAY-2310-089</td>
                <td class="amt">125,000.00</td>
                <td>王技术</td>
                <td><span class="tag orange">即将逾期</span></td>
                <td><span class="st st-wait">待处理</span></td>
                <td><button type="button" class="link" data-drawer="pay" data-guide="approve-2">审批</button></td>
              </tr>
              <tr>
                <td>☐</td>
                <td><span class="tag blue">报销审核</span></td>
                <td>差旅报销单 · 上海出差</td>
                <td>TR-3301</td>
                <td class="amt">3,260.00</td>
                <td>王敏</td>
                <td><span class="tag green">正常</span></td>
                <td><span class="st st-wait">待处理</span></td>
                <td><button type="button" class="link" data-panel="expense">去报销审核</button></td>
              </tr>
              <tr>
                <td>☐</td>
                <td><span class="tag blue">对账任务</span></td>
                <td>银企流水核对 · 招行</td>
                <td>RC-884</td>
                <td class="amt danger">18,420.00</td>
                <td>系统</td>
                <td><span class="tag red">系统风险</span></td>
                <td><span class="st st-wait">待处理</span></td>
                <td><button type="button" class="link act-warn" data-panel="risk">处理</button></td>
              </tr>
              <tr>
                <td>☐</td>
                <td><span class="tag blue">发票异常</span></td>
                <td>发票校验失败</td>
                <td>INV-771</td>
                <td class="amt">8,600.00</td>
                <td>李华</td>
                <td><span class="tag red">高风险</span></td>
                <td><span class="st st-reject">已打回</span></td>
                <td><button type="button" class="link act-warn" data-drawer="risk">核查</button></td>
              </tr>
            </tbody>
          </table>
          <div class="pager">共 124 条 <i>‹</i><i class="on">1</i><i>2</i><i>3</i><i>›</i> 10 条/页</div>
        </div>`,
    },

    risk: {
      html: `
        <div class="page-head-row">
          <div>
            <h3>风险中心</h3>
            <p>高中低分层 · 处置建议 · 处置轨迹</p>
          </div>
          <div class="page-actions">
            <span class="fake-input" style="min-width:200px">搜索风险 ID / 关联单号</span>
            <span class="chip primary">导出报告</span>
          </div>
        </div>
        <div class="risk-kpis">
          <div class="rk high">
            <s>高风险 · 未处理</s>
            <b>12</b>
            <em>敞口 <span class="money">¥125.0 万</span> · 建议人工干预</em>
          </div>
          <div class="rk mid">
            <s>中风险 · 未处理</s>
            <b>34</b>
            <em>敞口 ¥84.0 万 · 24h 内处理</em>
          </div>
          <div class="rk low">
            <s>低风险 · 未处理</s>
            <b>89</b>
            <em>敞口 ¥15.0 万 · 可系统提醒</em>
          </div>
          <div class="rk">
            <s>近 7 日趋势</s>
            <b style="font-size:15px;padding-top:8px">波动上升</b>
            <em>高风险触发次数 +18%</em>
          </div>
        </div>
        <div class="pill-tabs" id="risk-pills">
          <button type="button" class="on">全部风险 135</button>
          <button type="button">应收风险 45</button>
          <button type="button">应付风险 16</button>
          <button type="button">预算超支 12</button>
          <button type="button">发票合规 42</button>
          <button type="button">对账异常 14</button>
        </div>
        <div class="table-wrap">
          <table class="fos-table">
            <thead>
              <tr>
                <th>风险 ID</th><th>分类</th><th>风险描述</th><th>等级</th>
                <th>敞口金额</th><th>触发时间</th><th>状态</th><th>处理人</th><th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr class="row-active">
                <td>RSK-2310-001</td>
                <td>发票合规</td>
                <td>同供应商连续发票号报销</td>
                <td><span class="tag red">高风险</span></td>
                <td class="amt danger">150,000.00</td>
                <td>10-23 08:12</td>
                <td><span class="st st-wait">未处理</span></td>
                <td>系统拦阻</td>
                <td><button type="button" class="link act-warn" data-drawer="risk" data-guide="riskloop-2">核查</button></td>
              </tr>
              <tr>
                <td>RSK-2310-014</td>
                <td>逾期应收</td>
                <td>杭州星耀科技 · 账龄 92 天</td>
                <td><span class="tag red">高风险</span></td>
                <td class="amt danger">186,000.00</td>
                <td>10-22 16:40</td>
                <td><span class="st st-proc">处理中</span></td>
                <td>郝春阳</td>
                <td><button type="button" class="link act-warn" data-panel="ar" data-guide="riskloop-3">去催收</button></td>
              </tr>
              <tr>
                <td>RSK-2310-022</td>
                <td>预算超支</td>
                <td>市场部项目 A 超预算 50%</td>
                <td><span class="tag orange">中风险</span></td>
                <td class="amt">36,500.00</td>
                <td>10-21 11:05</td>
                <td><span class="st st-wait">未处理</span></td>
                <td>—</td>
                <td><button type="button" class="link act-warn" data-drawer="risk">核查</button></td>
              </tr>
              <tr>
                <td>RSK-2310-031</td>
                <td>对账异常</td>
                <td>银行流水未达账 18 笔</td>
                <td><span class="tag blue">低风险</span></td>
                <td class="amt">—</td>
                <td>10-20 09:00</td>
                <td><span class="st st-wait">未处理</span></td>
                <td>—</td>
                <td><button type="button" class="link">跟进</button></td>
              </tr>
            </tbody>
          </table>
          <div class="pager">共 135 条 <i>‹</i><i class="on">1</i><i>2</i><i>3</i><i>›</i></div>
        </div>`,
    },

    ar: {
      html: `
        <div class="page-head-row">
          <div>
            <h3>应收总览</h3>
            <p>全面掌握应收账款情况，及时跟踪回款进度</p>
          </div>
          <div class="page-actions">
            <span class="fake-input" style="min-width:180px">搜索客户 / 单据</span>
            <span class="chip">筛选</span>
            <span class="chip">导出</span>
          </div>
        </div>
        <div class="ar-kpis">
          <div class="ar-card"><s>应收总额</s><b>¥12,580,000.00</b><em>较上月 +5.2%</em></div>
          <div class="ar-card"><s>待收金额</s><b>¥8,320,000.00</b><em class="down">较上月 -2.1%</em></div>
          <div class="ar-card"><s>逾期金额</s><b class="danger">¥3,280,000.00</b><em class="danger">较上月 +12.4%</em></div>
          <div class="ar-card"><s>逾期客户</s><b class="danger">26</b><em class="danger">新增 3 家</em></div>
        </div>
        <div class="chart-grid">
          <article class="wb-card">
            <h4>应收金额趋势（近 6 个月）</h4>
            <div class="line-chart" style="height:140px" aria-hidden="true">
              <span style="height:55%"></span><span style="height:62%"></span>
              <span style="height:58%"></span><span style="height:70%"></span>
              <span style="height:78%"></span><span style="height:84%"></span>
              <span style="height:40%;background:linear-gradient(180deg,#ff7875,#ff4d4f)"></span>
              <span style="height:48%;background:linear-gradient(180deg,#ff7875,#ff4d4f)"></span>
              <span style="height:52%;background:linear-gradient(180deg,#ff7875,#ff4d4f)"></span>
              <span style="height:60%;background:linear-gradient(180deg,#ff7875,#ff4d4f)"></span>
              <span style="height:68%;background:linear-gradient(180deg,#ff7875,#ff4d4f)"></span>
              <span style="height:74%;background:linear-gradient(180deg,#ff7875,#ff4d4f)"></span>
            </div>
            <div style="display:flex;gap:16px;font-size:11px;color:#8c9bb3;margin-top:8px">
              <span class="lg-dot lg-blue">应收总额</span><span class="lg-dot lg-red">逾期金额</span>
            </div>
          </article>
          <article class="wb-card">
            <h4>应收账龄分析</h4>
            <div class="aging">
              <div><div style="display:flex;justify-content:space-between"><span>0-30 天</span><span>450 万 · 54.1%</span></div><div class="bar"><i style="width:54%"></i></div></div>
              <div><div style="display:flex;justify-content:space-between"><span>31-60 天</span><span>210 万 · 25.2%</span></div><div class="bar"><i style="width:25%;background:#faad14"></i></div></div>
              <div><div style="display:flex;justify-content:space-between"><span>61-90 天</span><span>90 万 · 10.8%</span></div><div class="bar"><i style="width:11%;background:#fa8c16"></i></div></div>
              <div><div style="display:flex;justify-content:space-between"><span>90+ 天</span><span>82 万 · 9.9%</span></div><div class="bar red"><i style="width:10%"></i></div></div>
            </div>
            <div class="warn-box">高风险逾期预警：90+ 天占比偏高，建议立即催收。</div>
          </article>
        </div>
        <div class="table-wrap">
          <div class="select-bar">
            <span>已选择 1 个客户</span>
            <button type="button" class="chip primary act-warn" data-drawer="collect" data-guide="riskloop-4">批量发起催收</button>
            <button type="button" class="chip">导出选中项</button>
            <button type="button" class="chip">取消选择</button>
            <div class="tabs-inline">
              <button type="button" class="on">全部客户</button>
              <button type="button">逾期 <i class="badge red">12</i></button>
              <button type="button">未逾期</button>
            </div>
          </div>
          <table class="fos-table">
            <thead>
              <tr>
                <th></th><th>客户名称</th><th>应收金额</th><th>已收</th><th>待收</th>
                <th>逾期</th><th>最长账龄</th><th>风险</th><th>回款状态</th><th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr class="row-active">
                <td>☑</td>
                <td>杭州星耀科技有限公司</td>
                <td class="amt">420,000.00</td>
                <td>234,000.00</td>
                <td>186,000.00</td>
                <td class="amt danger">186,000.00</td>
                <td>92 天</td>
                <td><span class="tag red">高</span></td>
                <td><span class="st st-partial">部分回款</span></td>
                <td>
                  <button type="button" class="link">详情</button>
                  <button type="button" class="link act-warn" data-drawer="collect" data-guide="riskloop-4">发起催收</button>
                </td>
              </tr>
              <tr>
                <td>☐</td>
                <td>北京骄宁贸易有限公司</td>
                <td class="amt">96,000.00</td>
                <td>0.00</td>
                <td>96,000.00</td>
                <td class="amt danger">96,000.00</td>
                <td>61 天</td>
                <td><span class="tag orange">中</span></td>
                <td><span class="st st-reject">未回款</span></td>
                <td>
                  <button type="button" class="link">详情</button>
                  <button type="button" class="link act-warn" data-drawer="collect">发起催收</button>
                </td>
              </tr>
              <tr>
                <td>☐</td>
                <td>上海拓客科技有限公司</td>
                <td class="amt">650,000.00</td>
                <td>650,000.00</td>
                <td>0.00</td>
                <td>0.00</td>
                <td>—</td>
                <td><span class="tag gray">低</span></td>
                <td><span class="st st-ok">已结清</span></td>
                <td><button type="button" class="link">详情</button></td>
              </tr>
            </tbody>
          </table>
          <div class="pager">共 124 条客户数据 <i>‹</i><i class="on">1</i><i>2</i><i>›</i> 10 条/页</div>
        </div>`,
    },

    arLedger: {
      html: `
        <div class="page-head-row">
          <div>
            <h3>应收账款列表</h3>
            <p>按单据追踪应收余额、账龄与回款状态</p>
          </div>
          <div class="page-actions">
            <span class="fake-input" style="min-width:180px">搜索单号 / 客户</span>
            <span class="chip">筛选</span>
            <span class="chip primary">导出</span>
          </div>
        </div>
        <div class="ar-kpis">
          <div class="ar-card"><s>应收合计</s><b>¥12,580,000.00</b><em>共 86 笔</em></div>
          <div class="ar-card"><s>待核销</s><b>¥8,320,000.00</b><em>42 笔未结清</em></div>
          <div class="ar-card"><s>逾期合计</s><b class="danger">¥3,280,000.00</b><em class="danger">18 笔</em></div>
          <div class="ar-card"><s>本月回款</s><b>¥1,860,000.00</b><em class="down">达成率 78%</em></div>
        </div>
        <div class="filter-bar">
          <span class="fake-input">客户</span>
          <span class="fake-input">账龄区间</span>
          <span class="fake-input">回款状态</span>
          <span class="fake-input">到期日</span>
          <span class="fake-input">风险等级</span>
          <span class="chip primary">查询</span>
          <span class="chip">重置</span>
        </div>
        <div class="table-wrap">
          <table class="fos-table">
            <thead>
              <tr>
                <th>应收单号</th><th>客户</th><th>应收金额</th><th>已收</th><th>余额</th>
                <th>到期日</th><th>账龄</th><th>状态</th><th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr class="row-active">
                <td>AR-2310-014</td>
                <td>杭州星耀科技有限公司</td>
                <td class="amt">420,000.00</td>
                <td>234,000.00</td>
                <td class="amt danger">186,000.00</td>
                <td>2023-07-28</td>
                <td>92 天</td>
                <td><span class="tag red">逾期</span></td>
                <td>
                  <button type="button" class="link" data-panel="arCustomer">客户</button>
                  <button type="button" class="link act-warn" data-drawer="collect">催收</button>
                </td>
              </tr>
              <tr>
                <td>AR-2310-022</td>
                <td>北京骄宁贸易有限公司</td>
                <td class="amt">96,000.00</td>
                <td>0.00</td>
                <td class="amt danger">96,000.00</td>
                <td>2023-08-28</td>
                <td>61 天</td>
                <td><span class="tag orange">逾期</span></td>
                <td><button type="button" class="link act-warn" data-drawer="collect">催收</button></td>
              </tr>
              <tr>
                <td>AR-2310-031</td>
                <td>上海拓客科技有限公司</td>
                <td class="amt">650,000.00</td>
                <td>650,000.00</td>
                <td>0.00</td>
                <td>2023-09-15</td>
                <td>—</td>
                <td><span class="tag green">已结清</span></td>
                <td><button type="button" class="link" data-panel="ar">总览</button></td>
              </tr>
              <tr>
                <td>AR-2310-048</td>
                <td>深圳云启数科有限公司</td>
                <td class="amt">280,000.00</td>
                <td>120,000.00</td>
                <td>160,000.00</td>
                <td>2023-10-30</td>
                <td>12 天</td>
                <td><span class="tag blue">部分回款</span></td>
                <td><button type="button" class="link">详情</button></td>
              </tr>
            </tbody>
          </table>
          <div class="pager">共 86 条 <i>‹</i><i class="on">1</i><i>2</i><i>3</i><i>›</i> 10 条/页</div>
        </div>`,
    },

    arCustomer: {
      html: `
        <div class="page-head-row">
          <div>
            <h3>应收客户</h3>
            <p>客户维度汇总应收、逾期与信用风险</p>
          </div>
          <div class="page-actions">
            <span class="fake-input" style="min-width:180px">搜索客户名称</span>
            <span class="chip">信用分层</span>
            <span class="chip primary">导出客户</span>
          </div>
        </div>
        <div class="ar-kpis">
          <div class="ar-card"><s>活跃客户</s><b>124</b><em>本月新增 6</em></div>
          <div class="ar-card"><s>逾期客户</s><b class="danger">26</b><em class="danger">新增 3 家</em></div>
          <div class="ar-card"><s>高风险客户</s><b class="danger">8</b><em>账龄 90+ 天</em></div>
          <div class="ar-card"><s>平均账期</s><b>42 天</b><em class="down">较上月 -3 天</em></div>
        </div>
        <div class="tabs-line" id="ar-customer-tabs">
          <button type="button" class="on">全部客户</button>
          <button type="button">逾期 <i class="badge red">26</i></button>
          <button type="button">高风险 <i class="badge red">8</i></button>
          <button type="button">已结清</button>
        </div>
        <div class="table-wrap">
          <table class="fos-table">
            <thead>
              <tr>
                <th>客户名称</th><th>应收总额</th><th>待收</th><th>逾期</th>
                <th>最长账龄</th><th>信用</th><th>销售负责人</th><th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr class="row-active">
                <td>杭州星耀科技有限公司</td>
                <td class="amt">420,000.00</td>
                <td>186,000.00</td>
                <td class="amt danger">186,000.00</td>
                <td>92 天</td>
                <td><span class="tag red">高</span></td>
                <td>张伟</td>
                <td>
                  <button type="button" class="link" data-panel="arLedger">账款</button>
                  <button type="button" class="link" data-panel="arCollect">催收任务</button>
                </td>
              </tr>
              <tr>
                <td>北京骄宁贸易有限公司</td>
                <td class="amt">96,000.00</td>
                <td>96,000.00</td>
                <td class="amt danger">96,000.00</td>
                <td>61 天</td>
                <td><span class="tag orange">中</span></td>
                <td>李华</td>
                <td><button type="button" class="link act-warn" data-drawer="collect">发起催收</button></td>
              </tr>
              <tr>
                <td>上海拓客科技有限公司</td>
                <td class="amt">650,000.00</td>
                <td>0.00</td>
                <td>0.00</td>
                <td>—</td>
                <td><span class="tag green">低</span></td>
                <td>王敏</td>
                <td><button type="button" class="link" data-panel="ar">总览</button></td>
              </tr>
              <tr>
                <td>广州启航传媒有限公司</td>
                <td class="amt">158,000.00</td>
                <td>58,000.00</td>
                <td>0.00</td>
                <td>18 天</td>
                <td><span class="tag blue">低</span></td>
                <td>赵倩</td>
                <td><button type="button" class="link">详情</button></td>
              </tr>
            </tbody>
          </table>
          <div class="pager">共 124 家客户 <i>‹</i><i class="on">1</i><i>2</i><i>›</i> 10 条/页</div>
        </div>`,
    },

    arCollect: {
      html: `
        <div class="page-head-row">
          <div>
            <h3>催收任务</h3>
            <p>逾期催收编排 · 函件 · 跟进状态</p>
          </div>
          <div class="page-actions">
            <span class="fake-input" style="min-width:180px">搜索客户 / 任务号</span>
            <button type="button" class="chip primary act-warn" data-drawer="collect" data-guide="riskloop-4">发起催收</button>
          </div>
        </div>
        <div class="ar-kpis">
          <div class="ar-card"><s>进行中</s><b>14</b><em>今日跟进 5</em></div>
          <div class="ar-card"><s>待发起</s><b class="danger">6</b><em class="danger">高风险优先</em></div>
          <div class="ar-card"><s>本周回款</s><b>¥86.4 万</b><em class="down">催收回款率 41%</em></div>
          <div class="ar-card"><s>平均跟进天数</s><b>3.2</b><em>SLA 5 天内</em></div>
        </div>
        <div class="tabs-line" id="collect-tabs">
          <button type="button" class="on">进行中 <i class="badge">14</i></button>
          <button type="button">待发起 <i class="badge red">6</i></button>
          <button type="button">已回款</button>
          <button type="button">已关闭</button>
        </div>
        <div class="filter-bar">
          <span class="fake-input">风险等级</span>
          <span class="fake-input">账龄</span>
          <span class="fake-input">负责人</span>
          <span class="fake-input">创建日</span>
          <span class="chip primary">查询</span>
          <span class="chip">重置</span>
        </div>
        <div class="table-wrap">
          <table class="fos-table">
            <thead>
              <tr>
                <th>任务号</th><th>客户</th><th>逾期金额</th><th>账龄</th><th>风险</th>
                <th>负责人</th><th>状态</th><th>最近跟进</th><th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr class="row-active">
                <td>COL-2310-009</td>
                <td>杭州星耀科技有限公司</td>
                <td class="amt danger">186,000.00</td>
                <td>92 天</td>
                <td><span class="tag red">高</span></td>
                <td>郝春阳</td>
                <td><span class="st st-wait">待发起</span></td>
                <td>—</td>
                <td><button type="button" class="link act-warn" data-drawer="collect" data-guide="riskloop-4">发起催收</button></td>
              </tr>
              <tr>
                <td>COL-2310-012</td>
                <td>北京骄宁贸易有限公司</td>
                <td class="amt danger">96,000.00</td>
                <td>61 天</td>
                <td><span class="tag orange">中</span></td>
                <td>李华</td>
                <td><span class="st st-proc">跟进中</span></td>
                <td>10-22 电话</td>
                <td><button type="button" class="link act-warn" data-drawer="collect">继续催收</button></td>
              </tr>
              <tr>
                <td>COL-2310-004</td>
                <td>苏州智造工业有限公司</td>
                <td class="amt">48,000.00</td>
                <td>45 天</td>
                <td><span class="tag blue">低</span></td>
                <td>王敏</td>
                <td><span class="st st-partial">部分回款</span></td>
                <td>10-21 函件</td>
                <td><button type="button" class="link">详情</button></td>
              </tr>
              <tr>
                <td>COL-2309-088</td>
                <td>南京蓝湾贸易有限公司</td>
                <td class="amt">72,000.00</td>
                <td>38 天</td>
                <td><span class="tag orange">中</span></td>
                <td>张伟</td>
                <td><span class="st st-ok">已回款</span></td>
                <td>10-18 结清</td>
                <td><button type="button" class="link" data-panel="arLedger">查看账款</button></td>
              </tr>
            </tbody>
          </table>
          <div class="pager">共 20 条催收任务 <i>‹</i><i class="on">1</i><i>2</i><i>›</i> 10 条/页</div>
        </div>`,
    },

    ap: {
      html: `
        <div class="page-head-row">
          <div>
            <h3>应付总览</h3>
            <p>掌握应付余额、到期付款与供应商风险</p>
          </div>
          <div class="page-actions">
            <span class="fake-input" style="min-width:180px">搜索供应商 / 单号</span>
            <span class="chip">筛选</span>
            <span class="chip primary">导出</span>
          </div>
        </div>
        <div class="ar-kpis">
          <div class="ar-card"><s>应付总额</s><b>¥6,840,000.00</b><em>较上月 +3.1%</em></div>
          <div class="ar-card"><s>待付款</s><b>¥2,460,000.00</b><em>本周到期 18 笔</em></div>
          <div class="ar-card"><s>逾期应付</s><b class="danger">¥420,000.00</b><em class="danger">6 笔待催付</em></div>
          <div class="ar-card"><s>本月已付</s><b>¥1,980,000.00</b><em class="down">付款达成 82%</em></div>
        </div>
        <div class="chart-grid">
          <article class="wb-card">
            <h4>应付金额趋势（近 6 个月）</h4>
            <div class="line-chart" style="height:140px" aria-hidden="true">
              <span style="height:48%"></span><span style="height:52%"></span>
              <span style="height:58%"></span><span style="height:62%"></span>
              <span style="height:70%"></span><span style="height:76%"></span>
            </div>
          </article>
          <article class="wb-card">
            <h4>到期分布</h4>
            <div class="aging">
              <div><div style="display:flex;justify-content:space-between"><span>7 日内</span><span>86 万</span></div><div class="bar"><i style="width:42%"></i></div></div>
              <div><div style="display:flex;justify-content:space-between"><span>8-30 日</span><span>124 万</span></div><div class="bar"><i style="width:58%;background:#faad14"></i></div></div>
              <div><div style="display:flex;justify-content:space-between"><span>已逾期</span><span>42 万</span></div><div class="bar red"><i style="width:20%"></i></div></div>
            </div>
          </article>
        </div>
        <div class="table-wrap">
          <table class="fos-table">
            <thead>
              <tr>
                <th>供应商</th><th>应付余额</th><th>待付款</th><th>逾期</th><th>最近到期</th><th>状态</th><th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr class="row-active">
                <td>阿里云计算有限公司</td>
                <td class="amt">125,000.00</td>
                <td>125,000.00</td>
                <td>0.00</td>
                <td>2023-10-24</td>
                <td><span class="tag orange">待付款</span></td>
                <td>
                  <button type="button" class="link" data-panel="apLedger">账款</button>
                  <button type="button" class="link" data-drawer="pay">审批付款</button>
                </td>
              </tr>
              <tr>
                <td>上海数维科技有限公司</td>
                <td class="amt">286,000.00</td>
                <td>86,000.00</td>
                <td class="amt danger">36,000.00</td>
                <td>2023-10-12</td>
                <td><span class="tag red">部分逾期</span></td>
                <td><button type="button" class="link" data-panel="apVendor">供应商</button></td>
              </tr>
              <tr>
                <td>北京云启办公服务</td>
                <td class="amt">48,600.00</td>
                <td>48,600.00</td>
                <td>0.00</td>
                <td>2023-11-02</td>
                <td><span class="tag blue">待对账</span></td>
                <td><button type="button" class="link">详情</button></td>
              </tr>
            </tbody>
          </table>
          <div class="pager">共 64 家供应商应付 <i>‹</i><i class="on">1</i><i>2</i><i>›</i></div>
        </div>`,
    },

    apLedger: {
      html: `
        <div class="page-head-row">
          <div>
            <h3>应付账款</h3>
            <p>应付单据明细 · 付款计划 · 核销状态</p>
          </div>
          <div class="page-actions">
            <span class="fake-input" style="min-width:180px">搜索应付单号</span>
            <span class="chip">批量付款</span>
            <span class="chip primary">导出</span>
          </div>
        </div>
        <div class="filter-bar">
          <span class="fake-input">供应商</span>
          <span class="fake-input">付款状态</span>
          <span class="fake-input">到期日</span>
          <span class="fake-input">金额区间</span>
          <span class="chip primary">查询</span>
          <span class="chip">重置</span>
        </div>
        <div class="table-wrap">
          <table class="fos-table">
            <thead>
              <tr>
                <th></th><th>应付单号</th><th>供应商</th><th>应付金额</th><th>已付</th>
                <th>余额</th><th>到期日</th><th>状态</th><th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr class="row-active">
                <td>☐</td>
                <td>AP-2310-089</td>
                <td>阿里云计算有限公司</td>
                <td class="amt">125,000.00</td>
                <td>0.00</td>
                <td>125,000.00</td>
                <td>2023-10-24</td>
                <td><span class="tag orange">待审批</span></td>
                <td><button type="button" class="link" data-drawer="pay">审批</button></td>
              </tr>
              <tr>
                <td>☐</td>
                <td>AP-2310-076</td>
                <td>上海数维科技有限公司</td>
                <td class="amt">86,000.00</td>
                <td>50,000.00</td>
                <td>36,000.00</td>
                <td>2023-10-12</td>
                <td><span class="tag red">逾期</span></td>
                <td><button type="button" class="link" data-panel="todo">去待办</button></td>
              </tr>
              <tr>
                <td>☐</td>
                <td>AP-2310-061</td>
                <td>杭州印务包装有限公司</td>
                <td class="amt">18,400.00</td>
                <td>18,400.00</td>
                <td>0.00</td>
                <td>2023-09-30</td>
                <td><span class="tag green">已付清</span></td>
                <td><button type="button" class="link">详情</button></td>
              </tr>
              <tr>
                <td>☐</td>
                <td>AP-2310-055</td>
                <td>北京云启办公服务</td>
                <td class="amt">48,600.00</td>
                <td>0.00</td>
                <td>48,600.00</td>
                <td>2023-11-02</td>
                <td><span class="tag blue">待付款</span></td>
                <td><button type="button" class="link" data-panel="apVendor">供应商</button></td>
              </tr>
            </tbody>
          </table>
          <div class="pager">共 128 条 <i>‹</i><i class="on">1</i><i>2</i><i>3</i><i>›</i> 10 条/页</div>
        </div>`,
    },

    apVendor: {
      html: `
        <div class="page-head-row">
          <div>
            <h3>供应商</h3>
            <p>供应商档案 · 应付余额 · 合作评级</p>
          </div>
          <div class="page-actions">
            <span class="fake-input" style="min-width:180px">搜索供应商</span>
            <span class="chip">评级筛选</span>
            <span class="chip primary">新建供应商</span>
          </div>
        </div>
        <div class="ar-kpis">
          <div class="ar-card"><s>合作供应商</s><b>86</b><em>本月新增 2</em></div>
          <div class="ar-card"><s>有应付余额</s><b>42</b><em>待付款 18 家</em></div>
          <div class="ar-card"><s>风险供应商</s><b class="danger">5</b><em class="danger">发票/逾期异常</em></div>
          <div class="ar-card"><s>平均账期</s><b>35 天</b><em>合同约定 30–45</em></div>
        </div>
        <div class="table-wrap">
          <table class="fos-table">
            <thead>
              <tr>
                <th>供应商名称</th><th>应付余额</th><th>本月付款</th><th>账期</th>
                <th>评级</th><th>联系人</th><th>状态</th><th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr class="row-active">
                <td>阿里云计算有限公司</td>
                <td class="amt">125,000.00</td>
                <td>0.00</td>
                <td>30 天</td>
                <td><span class="tag green">A</span></td>
                <td>云渠道经理</td>
                <td><span class="st st-ok">合作中</span></td>
                <td>
                  <button type="button" class="link" data-panel="apLedger">账款</button>
                  <button type="button" class="link" data-drawer="pay">付款</button>
                </td>
              </tr>
              <tr>
                <td>上海数维科技有限公司</td>
                <td class="amt">286,000.00</td>
                <td>50,000.00</td>
                <td>45 天</td>
                <td><span class="tag orange">B</span></td>
                <td>陈经理</td>
                <td><span class="st st-ok">合作中</span></td>
                <td><button type="button" class="link" data-panel="ap">总览</button></td>
              </tr>
              <tr>
                <td>杭州印务包装有限公司</td>
                <td class="amt">0.00</td>
                <td>18,400.00</td>
                <td>15 天</td>
                <td><span class="tag green">A</span></td>
                <td>刘会计</td>
                <td><span class="st st-ok">已结清</span></td>
                <td><button type="button" class="link">详情</button></td>
              </tr>
              <tr>
                <td>未知票号供应商 · 待核验</td>
                <td class="amt danger">150,000.00</td>
                <td>0.00</td>
                <td>—</td>
                <td><span class="tag red">风险</span></td>
                <td>—</td>
                <td><span class="st st-proc">核查中</span></td>
                <td><button type="button" class="link" data-panel="risk">去风险中心</button></td>
              </tr>
            </tbody>
          </table>
          <div class="pager">共 86 家供应商 <i>‹</i><i class="on">1</i><i>2</i><i>›</i></div>
        </div>`,
    },

    expense: {
      html: `
        <div class="page-head-row">
          <div>
            <h3>报销审核</h3>
            <p>费用管理 · 规则校验 · 发票验真 · 抽屉审核</p>
          </div>
          <div class="page-actions">
            <span class="fake-input" style="min-width:180px">搜索单号 / 申请人</span>
            <span class="chip">导出</span>
            <span class="chip primary">批量通过</span>
          </div>
        </div>
        <div class="ar-kpis expense-kpis">
          <div class="ar-card"><s>待审核</s><b>18</b><em>今日新增 5</em></div>
          <div class="ar-card"><s>今日已通过</s><b>27</b><em class="down">平均 4.2 分钟/单</em></div>
          <div class="ar-card"><s>已打回</s><b class="danger">3</b><em class="danger">缺附件 / 超标</em></div>
          <div class="ar-card"><s>本月报销额</s><b>¥186.4 万</b><em>预算占用 62%</em></div>
        </div>
        <div class="tabs-line" id="expense-tabs">
          <button type="button" class="on">待审核 <i class="badge">18</i></button>
          <button type="button">已通过 <i class="badge gray">142</i></button>
          <button type="button">已打回 <i class="badge red">3</i></button>
          <button type="button">全部</button>
        </div>
        <div class="filter-bar">
          <span class="fake-input">报销类型</span>
          <span class="fake-input">部门</span>
          <span class="fake-input">金额区间</span>
          <span class="fake-input">发票状态</span>
          <span class="fake-input">提交日期</span>
          <span class="chip primary">查询</span>
          <span class="chip">重置</span>
        </div>
        <div class="table-wrap">
          <table class="fos-table">
            <thead>
              <tr>
                <th></th><th>报销类型</th><th>单据名称</th><th>单号</th><th>申请人</th>
                <th>部门</th><th>金额</th><th>发票</th><th>规则</th><th>状态</th><th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr class="row-active">
                <td>☐</td>
                <td><span class="tag blue">差旅</span></td>
                <td>差旅报销单 · 上海出差</td>
                <td>TR-3301</td>
                <td>王敏</td>
                <td>市场部</td>
                <td class="amt">3,260.00</td>
                <td><span class="tag green">已验真 ×3</span></td>
                <td><span class="tag green">通过</span></td>
                <td><span class="st st-wait">待审核</span></td>
                <td><button type="button" class="link" data-drawer="expense" data-guide="expense-2">审核</button></td>
              </tr>
              <tr>
                <td>☐</td>
                <td><span class="tag blue">招待</span></td>
                <td>客户招待费 · Q3 复盘</td>
                <td>TR-3298</td>
                <td>李华</td>
                <td>销售部</td>
                <td class="amt">1,280.00</td>
                <td><span class="tag orange">缺水单</span></td>
                <td><span class="tag red">拦截</span></td>
                <td><span class="st st-wait">待审核</span></td>
                <td><button type="button" class="link" data-drawer="expense">审核</button></td>
              </tr>
              <tr>
                <td>☐</td>
                <td><span class="tag blue">交通</span></td>
                <td>市内交通费报销</td>
                <td>TR-3288</td>
                <td>张伟</td>
                <td>研发部</td>
                <td class="amt">420.00</td>
                <td><span class="tag green">已验真 ×1</span></td>
                <td><span class="tag green">通过</span></td>
                <td><span class="st st-wait">待审核</span></td>
                <td><button type="button" class="link" data-drawer="expense">审核</button></td>
              </tr>
              <tr>
                <td>☐</td>
                <td><span class="tag blue">差旅</span></td>
                <td>北京出差报销</td>
                <td>TR-3270</td>
                <td>赵倩</td>
                <td>产品部</td>
                <td class="amt">5,680.00</td>
                <td><span class="tag green">已验真 ×5</span></td>
                <td><span class="tag orange">超标提醒</span></td>
                <td><span class="st st-wait">待审核</span></td>
                <td><button type="button" class="link" data-drawer="expense">审核</button></td>
              </tr>
            </tbody>
          </table>
          <div class="pager">共 18 条待审核 <i>‹</i><i class="on">1</i><i>2</i><i>›</i> 10 条/页</div>
        </div>
        <div class="proto-hint-row">
          <span>操作提示</span>
          点击行内「审核」打开抽屉，可核对费用明细与附件后通过或打回。
        </div>`,
    },

    expenseDetail: {
      html: `
        <div class="page-head-row">
          <div>
            <h3>费用明细</h3>
            <p>按费用科目与成本中心查看明细流水</p>
          </div>
          <div class="page-actions">
            <span class="fake-input" style="min-width:180px">搜索科目 / 单号</span>
            <span class="chip">导出明细</span>
            <span class="chip primary">新建分摊</span>
          </div>
        </div>
        <div class="ar-kpis">
          <div class="ar-card"><s>本月明细笔数</s><b>1,286</b><em>今日 46</em></div>
          <div class="ar-card"><s>本月费用额</s><b>¥186.4 万</b><em>预算占用 62%</em></div>
          <div class="ar-card"><s>待分摊</s><b class="danger">28</b><em class="danger">金额 ¥42.6 万</em></div>
          <div class="ar-card"><s>已入账</s><b>1,102</b><em class="down">凭证生成率 86%</em></div>
        </div>
        <div class="filter-bar">
          <span class="fake-input">费用类型</span>
          <span class="fake-input">部门</span>
          <span class="fake-input">成本中心</span>
          <span class="fake-input">入账状态</span>
          <span class="fake-input">日期</span>
          <span class="chip primary">查询</span>
          <span class="chip">重置</span>
        </div>
        <div class="table-wrap">
          <table class="fos-table">
            <thead>
              <tr>
                <th>明细号</th><th>关联单据</th><th>费用类型</th><th>科目</th><th>成本中心</th>
                <th>金额</th><th>申请人</th><th>状态</th><th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr class="row-active">
                <td>FD-3301-01</td>
                <td>TR-3301</td>
                <td><span class="tag blue">差旅</span></td>
                <td>交通费</td>
                <td>MKT-2026</td>
                <td class="amt">1,120.00</td>
                <td>王敏</td>
                <td><span class="st st-wait">待审核</span></td>
                <td><button type="button" class="link" data-panel="expense">去审核</button></td>
              </tr>
              <tr>
                <td>FD-3301-02</td>
                <td>TR-3301</td>
                <td><span class="tag blue">差旅</span></td>
                <td>住宿费</td>
                <td>MKT-2026</td>
                <td class="amt">1,680.00</td>
                <td>王敏</td>
                <td><span class="st st-wait">待审核</span></td>
                <td><button type="button" class="link" data-drawer="expense">查看</button></td>
              </tr>
              <tr>
                <td>FD-3298-01</td>
                <td>TR-3298</td>
                <td><span class="tag blue">招待</span></td>
                <td>业务招待费</td>
                <td>SALES-08</td>
                <td class="amt">1,280.00</td>
                <td>李华</td>
                <td><span class="st st-reject">拦截</span></td>
                <td><button type="button" class="link act-warn" data-panel="expense">处理</button></td>
              </tr>
              <tr>
                <td>FD-3280-03</td>
                <td>TR-3280</td>
                <td><span class="tag blue">办公</span></td>
                <td>办公用品</td>
                <td>ADM-01</td>
                <td class="amt">860.00</td>
                <td>赵倩</td>
                <td><span class="st st-wait">待分摊</span></td>
                <td><button type="button" class="link" data-panel="expenseAlloc">去分摊</button></td>
              </tr>
            </tbody>
          </table>
          <div class="pager">共 1,286 条明细 <i>‹</i><i class="on">1</i><i>2</i><i>3</i><i>›</i></div>
        </div>`,
    },

    expenseAlloc: {
      html: `
        <div class="page-head-row">
          <div>
            <h3>费用分摊</h3>
            <p>多成本中心分摊规则 · 比例 / 固定额</p>
          </div>
          <div class="page-actions">
            <span class="fake-input" style="min-width:180px">搜索分摊任务</span>
            <span class="chip">规则模板</span>
            <span class="chip primary">新建分摊</span>
          </div>
        </div>
        <div class="ar-kpis">
          <div class="ar-card"><s>待分摊任务</s><b>12</b><em>金额 ¥42.6 万</em></div>
          <div class="ar-card"><s>本月已分摊</s><b>86</b><em class="down">成功率 98%</em></div>
          <div class="ar-card"><s>跨部门分摊</s><b>9</b><em>涉及 4 个中心</em></div>
          <div class="ar-card"><s>异常分摊</s><b class="danger">2</b><em class="danger">比例合计 ≠ 100%</em></div>
        </div>
        <div class="tabs-line" id="alloc-tabs">
          <button type="button" class="on">待分摊 <i class="badge">12</i></button>
          <button type="button">已完成</button>
          <button type="button">异常 <i class="badge red">2</i></button>
        </div>
        <div class="table-wrap">
          <table class="fos-table">
            <thead>
              <tr>
                <th>分摊任务</th><th>关联费用</th><th>总额</th><th>规则</th>
                <th>目标中心</th><th>状态</th><th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr class="row-active">
                <td>ALC-2310-018</td>
                <td>TR-3280 办公用品</td>
                <td class="amt">860.00</td>
                <td>比例分摊</td>
                <td>ADM-01 60% · MKT-2026 40%</td>
                <td><span class="tag orange">待确认</span></td>
                <td><button type="button" class="link">确认分摊</button></td>
              </tr>
              <tr>
                <td>ALC-2310-015</td>
                <td>市场活动合摊</td>
                <td class="amt">12,860.00</td>
                <td>固定额</td>
                <td>MKT-2026 · SALES-08</td>
                <td><span class="tag blue">草稿</span></td>
                <td><button type="button" class="link">编辑</button></td>
              </tr>
              <tr>
                <td>ALC-2310-011</td>
                <td>总部水电分摊</td>
                <td class="amt">36,400.00</td>
                <td>人头比例</td>
                <td>研发 / 产品 / 市场 / 销售</td>
                <td><span class="tag red">比例异常</span></td>
                <td><button type="button" class="link">修正</button></td>
              </tr>
              <tr>
                <td>ALC-2309-092</td>
                <td>差旅合摊 · Q3</td>
                <td class="amt">28,600.00</td>
                <td>比例分摊</td>
                <td>MKT-2026 · PROD-03</td>
                <td><span class="tag green">已完成</span></td>
                <td><button type="button" class="link" data-panel="expenseDetail">查看明细</button></td>
              </tr>
            </tbody>
          </table>
          <div class="pager">共 12 条待分摊 <i>‹</i><i class="on">1</i><i>2</i><i>›</i></div>
        </div>`,
    },

    invoice: {
      html: `
        <div class="page-head-row">
          <div>
            <h3>发票列表</h3>
            <p>进项 / 销项 · 验真 · 匹配状态</p>
          </div>
          <div class="page-actions">
            <span class="fake-input" style="min-width:180px">搜索发票号 / 销方</span>
            <span class="chip">批量验真</span>
            <span class="chip primary">导入发票</span>
          </div>
        </div>
        <div class="ar-kpis">
          <div class="ar-card"><s>本月发票</s><b>428</b><em>金额 ¥986.2 万</em></div>
          <div class="ar-card"><s>已验真</s><b>401</b><em class="down">通过率 93.7%</em></div>
          <div class="ar-card"><s>待匹配</s><b>19</b><em>待关联报销 / 应付</em></div>
          <div class="ar-card"><s>异常</s><b class="danger">8</b><em class="danger">连续票号 / 验真失败</em></div>
        </div>
        <div class="tabs-line" id="invoice-tabs">
          <button type="button" class="on">全部</button>
          <button type="button">进项</button>
          <button type="button">销项</button>
          <button type="button">异常 <i class="badge red">8</i></button>
        </div>
        <div class="filter-bar">
          <span class="fake-input">发票类型</span>
          <span class="fake-input">验真状态</span>
          <span class="fake-input">匹配状态</span>
          <span class="fake-input">开票日期</span>
          <span class="chip primary">查询</span>
          <span class="chip">重置</span>
        </div>
        <div class="table-wrap">
          <table class="fos-table">
            <thead>
              <tr>
                <th>发票号码</th><th>销方</th><th>类型</th><th>金额</th><th>税额</th>
                <th>开票日</th><th>验真</th><th>匹配</th><th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr class="row-active">
                <td>INV-33010192</td>
                <td>未知票号供应商</td>
                <td>增值税专票</td>
                <td class="amt">50,000.00</td>
                <td>6,500.00</td>
                <td>2023-10-20</td>
                <td><span class="tag green">通过</span></td>
                <td><span class="tag red">连续票号</span></td>
                <td><button type="button" class="link act-warn" data-panel="invoiceAbnormal">查看异常</button></td>
              </tr>
              <tr>
                <td>INV-33010193</td>
                <td>未知票号供应商</td>
                <td>增值税专票</td>
                <td class="amt">50,000.00</td>
                <td>6,500.00</td>
                <td>2023-10-20</td>
                <td><span class="tag green">通过</span></td>
                <td><span class="tag red">连续票号</span></td>
                <td><button type="button" class="link act-warn" data-drawer="risk">核查</button></td>
              </tr>
              <tr>
                <td>INV-8892011</td>
                <td>上海高铁客运</td>
                <td>电子普票</td>
                <td class="amt">1,120.00</td>
                <td>0.00</td>
                <td>2023-08-18</td>
                <td><span class="tag green">通过</span></td>
                <td><span class="tag green">已匹配 TR-3301</span></td>
                <td><button type="button" class="link" data-panel="expense">报销单</button></td>
              </tr>
              <tr>
                <td>INV-7766012</td>
                <td>阿里云计算有限公司</td>
                <td>增值税专票</td>
                <td class="amt">125,000.00</td>
                <td>16,250.00</td>
                <td>2023-10-18</td>
                <td><span class="tag green">通过</span></td>
                <td><span class="tag blue">待匹配应付</span></td>
                <td><button type="button" class="link" data-panel="apLedger">去应付</button></td>
              </tr>
            </tbody>
          </table>
          <div class="pager">共 428 张发票 <i>‹</i><i class="on">1</i><i>2</i><i>3</i><i>›</i></div>
        </div>`,
    },

    invoiceAbnormal: {
      html: `
        <div class="page-head-row">
          <div>
            <h3>发票异常</h3>
            <p>验真失败 · 连续票号 · 金额不符 · 联风险控</p>
          </div>
          <div class="page-actions">
            <span class="fake-input" style="min-width:180px">搜索异常发票</span>
            <span class="chip">导出异常</span>
            <button type="button" class="chip primary" data-panel="risk">进入风险中心</button>
          </div>
        </div>
        <div class="ar-kpis">
          <div class="ar-card"><s>未处理异常</s><b class="danger">8</b><em class="danger">敞口 ¥150 万</em></div>
          <div class="ar-card"><s>连续票号</s><b>3</b><em>同供应商同日报销</em></div>
          <div class="ar-card"><s>验真失败</s><b>3</b><em>需人工复核</em></div>
          <div class="ar-card"><s>金额不符</s><b>2</b><em>与报销差异</em></div>
        </div>
        <div class="warn-box">高危提示：INV-33010192 ~ 194 触发规则 INV-RULE-003，建议暂停关联付款并进入风险核查。</div>
        <div class="table-wrap">
          <table class="fos-table">
            <thead>
              <tr>
                <th>异常 ID</th><th>发票号</th><th>类型</th><th>关联单据</th>
                <th>敞口</th><th>等级</th><th>状态</th><th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr class="row-active">
                <td>INV-ABN-001</td>
                <td>INV-33010192~194</td>
                <td>连续票号</td>
                <td>EXP-2310-088</td>
                <td class="amt danger">150,000.00</td>
                <td><span class="tag red">高</span></td>
                <td><span class="st st-wait">未处理</span></td>
                <td>
                  <button type="button" class="link act-warn" data-drawer="risk" data-guide="riskloop-2">打开核查单</button>
                  <button type="button" class="link" data-panel="risk">风险中心</button>
                </td>
              </tr>
              <tr>
                <td>INV-ABN-014</td>
                <td>INV-771</td>
                <td>验真失败</td>
                <td>TR-3277</td>
                <td class="amt">8,600.00</td>
                <td><span class="tag red">高</span></td>
                <td><span class="st st-reject">已打回</span></td>
                <td><button type="button" class="link" data-panel="todo">待办处理</button></td>
              </tr>
              <tr>
                <td>INV-ABN-022</td>
                <td>INV-99012</td>
                <td>金额不符</td>
                <td>TR-3260</td>
                <td class="amt">1,280.00</td>
                <td><span class="tag orange">中</span></td>
                <td><span class="st st-proc">处理中</span></td>
                <td><button type="button" class="link" data-panel="expense">报销审核</button></td>
              </tr>
              <tr>
                <td>INV-ABN-031</td>
                <td>INV-88101</td>
                <td>重复报销</td>
                <td>TR-3211</td>
                <td class="amt">3,420.00</td>
                <td><span class="tag orange">中</span></td>
                <td><span class="st st-wait">未处理</span></td>
                <td><button type="button" class="link" data-panel="risk">去风险</button></td>
              </tr>
            </tbody>
          </table>
          <div class="pager">共 8 条异常 <i>‹</i><i class="on">1</i><i>›</i></div>
        </div>`,
    },

    fund: {
      html: `
        <div class="page-head-row">
          <div>
            <h3>资金管理</h3>
            <p>账户余额 · 银企流水 · 对账差异</p>
          </div>
          <div class="page-actions">
            <span class="fake-input" style="min-width:180px">搜索账户 / 流水号</span>
            <span class="chip">同步银行</span>
            <span class="chip primary">发起对账</span>
          </div>
        </div>
        <div class="ar-kpis">
          <div class="ar-card"><s>可用余额</s><b>¥18,620,000.00</b><em>6 个账户</em></div>
          <div class="ar-card"><s>今日流入</s><b>¥1,240,000.00</b><em class="down">回款 12 笔</em></div>
          <div class="ar-card"><s>今日流出</s><b>¥860,000.00</b><em>付款 9 笔</em></div>
          <div class="ar-card"><s>对账差异</s><b class="danger">3</b><em class="danger">招行未达账</em></div>
        </div>
        <div class="chart-grid">
          <article class="wb-card">
            <h4>账户余额一览</h4>
            <div class="aging">
              <div><div style="display:flex;justify-content:space-between"><span>招商银行 · 基本户</span><span>¥8,420,000</span></div><div class="bar"><i style="width:72%"></i></div></div>
              <div><div style="display:flex;justify-content:space-between"><span>工商银行 · 一般户</span><span>¥5,180,000</span></div><div class="bar"><i style="width:44%;background:#13c2c2"></i></div></div>
              <div><div style="display:flex;justify-content:space-between"><span>支付宝 / 微信</span><span>¥1,260,000</span></div><div class="bar"><i style="width:18%;background:#faad14"></i></div></div>
              <div><div style="display:flex;justify-content:space-between"><span>其他账户</span><span>¥3,760,000</span></div><div class="bar"><i style="width:32%;background:#722ed1"></i></div></div>
            </div>
          </article>
          <article class="wb-card">
            <h4>近 14 日资金流水</h4>
            <div class="line-chart" style="height:140px" aria-hidden="true">
              <span style="height:40%"></span><span style="height:55%"></span>
              <span style="height:48%"></span><span style="height:62%"></span>
              <span style="height:58%"></span><span style="height:70%"></span>
              <span style="height:66%"></span><span style="height:52%"></span>
              <span style="height:74%"></span><span style="height:68%"></span>
              <span style="height:80%"></span><span style="height:72%"></span>
              <span style="height:78%"></span><span style="height:86%"></span>
            </div>
          </article>
        </div>
        <div class="tabs-line" id="fund-tabs">
          <button type="button" class="on">银行流水</button>
          <button type="button">账户列表</button>
          <button type="button">对账差异 <i class="badge red">3</i></button>
        </div>
        <div class="table-wrap">
          <table class="fos-table">
            <thead>
              <tr>
                <th>流水号</th><th>账户</th><th>对方</th><th>方向</th><th>金额</th>
                <th>时间</th><th>对账</th><th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr class="row-active">
                <td>BK-99201</td>
                <td>招行基本户</td>
                <td>上海拓客科技</td>
                <td><span class="tag green">流入</span></td>
                <td class="amt">650,000.00</td>
                <td>10-23 09:18</td>
                <td><span class="tag green">已匹配</span></td>
                <td><button type="button" class="link" data-panel="ar">应收核销</button></td>
              </tr>
              <tr>
                <td>BK-99188</td>
                <td>招行基本户</td>
                <td>未知对手方</td>
                <td><span class="tag blue">流入</span></td>
                <td class="amt">18,420.00</td>
                <td>10-22 16:02</td>
                <td><span class="tag red">差异</span></td>
                <td><button type="button" class="link" data-panel="todo">去对待办</button></td>
              </tr>
              <tr>
                <td>BK-99170</td>
                <td>工行一般户</td>
                <td>阿里云计算</td>
                <td><span class="tag orange">流出</span></td>
                <td class="amt">125,000.00</td>
                <td>10-21 11:40</td>
                <td><span class="tag blue">待付款确认</span></td>
                <td><button type="button" class="link" data-drawer="pay">关联付款单</button></td>
              </tr>
              <tr>
                <td>BK-99155</td>
                <td>招行基本户</td>
                <td>北京骄宁贸易</td>
                <td><span class="tag green">流入</span></td>
                <td class="amt">96,000.00</td>
                <td>10-20 14:22</td>
                <td><span class="tag orange">待核销</span></td>
                <td><button type="button" class="link" data-panel="arLedger">去应收</button></td>
              </tr>
            </tbody>
          </table>
          <div class="pager">共 2,486 条流水 <i>‹</i><i class="on">1</i><i>2</i><i>3</i><i>›</i></div>
        </div>`,
    },

    close: {
      html: `
        <div class="page-head-row">
          <div>
            <h3>月结中心</h3>
            <p>期末检查清单 · 支持取消与重试 · 剩余 5 天关账窗口</p>
          </div>
          <div class="page-actions">
            <span class="chip">导出清单</span>
            <span class="chip primary">一键重跑检查</span>
          </div>
        </div>
        <div class="ar-kpis">
          <div class="ar-card"><s>整体进度</s><b>76%</b><em>目标本周达 100%</em></div>
          <div class="ar-card"><s>已完成项</s><b>4 / 6</b><em class="down">应收 / 应付 / 资金 / —</em></div>
          <div class="ar-card"><s>阻塞项</s><b class="danger">1</b><em class="danger">费用结账待清理</em></div>
          <div class="ar-card"><s>窗口截止</s><b>9 月 5 日</b><em>台风公告已同步</em></div>
        </div>
        <div class="table-wrap">
          <table class="fos-table">
            <thead>
              <tr>
                <th>关账步骤</th><th>所属模块</th><th>状态</th><th>负责人</th><th>阻塞说明</th><th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>应收结账</td>
                <td>应收</td>
                <td><span class="tag green">已完成</span></td>
                <td>郝春阳</td>
                <td>—</td>
                <td><button type="button" class="link">查看</button></td>
              </tr>
              <tr>
                <td>应付结账</td>
                <td>应付</td>
                <td><span class="tag green">已完成</span></td>
                <td>李华</td>
                <td>—</td>
                <td><button type="button" class="link">查看</button></td>
              </tr>
              <tr class="row-active">
                <td>费用结账</td>
                <td>费用</td>
                <td><span class="tag orange">进行中</span></td>
                <td>郝春阳</td>
                <td>TR-3290 缺水单附件</td>
                <td><button type="button" class="link act-warn" data-drawer="closeTask" data-guide="closeout-2">处理阻塞</button></td>
              </tr>
              <tr>
                <td>资金对账</td>
                <td>资金</td>
                <td><span class="tag green">已完成</span></td>
                <td>系统</td>
                <td>—</td>
                <td><button type="button" class="link">查看</button></td>
              </tr>
              <tr>
                <td>凭证处理</td>
                <td>核算</td>
                <td><span class="tag gray">未开始</span></td>
                <td>—</td>
                <td>依赖费用结账完成</td>
                <td><button type="button" class="link" disabled style="opacity:.45;cursor:default">等待</button></td>
              </tr>
              <tr>
                <td>结账完成</td>
                <td>月结</td>
                <td><span class="tag gray">未开始</span></td>
                <td>—</td>
                <td>全部步骤通过后解锁</td>
                <td><button type="button" class="link" data-action="close-final" data-guide="closeout-3">尝试完成</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="warn-box" style="margin:0">提示：清理费用阻塞后，凭证处理与结账完成将自动解锁。</div>`,
    },

    analytics: {
      html: `
        <div class="page-head-row">
          <div>
            <h3>财务分析</h3>
            <p>收入成本 · 费用结构 · 回款与现金趋势</p>
          </div>
          <div class="page-actions">
            <span class="fake-input">近 12 个月</span>
            <span class="chip">对比上期</span>
            <span class="chip primary">导出报告</span>
          </div>
        </div>
        <div class="ar-kpis">
          <div class="ar-card"><s>营收（YTD）</s><b>¥11,780 万</b><em class="down">同比 +12.4%</em></div>
          <div class="ar-card"><s>成本（YTD）</s><b>¥11,610 万</b><em>毛利率 1.4%</em></div>
          <div class="ar-card"><s>费用率</s><b>18.6%</b><em>较预算 -1.2pp</em></div>
          <div class="ar-card"><s>经营现金流</s><b>¥2,860 万</b><em class="down">净流入</em></div>
        </div>
        <div class="chart-grid">
          <article class="wb-card">
            <h4>收入与成本（近 12 月 · 万）</h4>
            <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:8px;color:#667994">
              <span>收入 <b style="color:#1677ff">11,780.00</b></span>
              <span>成本 <b style="color:#13c2c2">11,610.00</b></span>
            </div>
            <div class="line-chart" style="height:160px" aria-hidden="true">
              <span style="height:42%"></span><span style="height:55%"></span>
              <span style="height:48%"></span><span style="height:70%"></span>
              <span style="height:62%"></span><span style="height:58%"></span>
              <span style="height:66%"></span><span style="height:74%"></span>
              <span style="height:68%"></span><span style="height:80%"></span>
              <span style="height:72%"></span><span style="height:86%"></span>
            </div>
          </article>
          <article class="wb-card">
            <h4>费用结构占比</h4>
            <div class="aging">
              <div><div style="display:flex;justify-content:space-between"><span>人力成本</span><span>42%</span></div><div class="bar"><i style="width:42%"></i></div></div>
              <div><div style="display:flex;justify-content:space-between"><span>市场费用</span><span>18%</span></div><div class="bar"><i style="width:18%;background:#faad14"></i></div></div>
              <div><div style="display:flex;justify-content:space-between"><span>差旅 / 招待</span><span>12%</span></div><div class="bar"><i style="width:12%;background:#13c2c2"></i></div></div>
              <div><div style="display:flex;justify-content:space-between"><span>云资源 / IT</span><span>16%</span></div><div class="bar"><i style="width:16%;background:#722ed1"></i></div></div>
              <div><div style="display:flex;justify-content:space-between"><span>其他</span><span>12%</span></div><div class="bar"><i style="width:12%;background:#8c9bb3"></i></div></div>
            </div>
          </article>
        </div>
        <div class="chart-grid" style="margin-top:12px">
          <article class="wb-card">
            <h4>回款达成（近 6 月）</h4>
            <div class="line-chart" style="height:140px" aria-hidden="true">
              <span style="height:58%"></span><span style="height:62%"></span>
              <span style="height:70%"></span><span style="height:66%"></span>
              <span style="height:78%"></span><span style="height:84%"></span>
            </div>
            <div style="margin-top:8px;font-size:12px;color:#8c9bb3">目标达成率 78% · 逾期催收回款贡献 41%</div>
          </article>
          <article class="wb-card">
            <h4>经营现金净流入</h4>
            <div class="line-chart" style="height:140px" aria-hidden="true">
              <span style="height:36%"></span><span style="height:44%"></span>
              <span style="height:52%"></span><span style="height:48%"></span>
              <span style="height:60%"></span><span style="height:72%"></span>
            </div>
            <div style="margin-top:8px;font-size:12px;color:#8c9bb3">
              <button type="button" class="link" data-panel="fund">查看资金流水</button>
              ·
              <button type="button" class="link" data-panel="ar">查看应收趋势</button>
            </div>
          </article>
        </div>`,
    },
  };

  const flows = {
    free: {
      steps: [],
      hint: "",
    },
    approve: {
      steps: [
        { id: "approve-1", label: "1 从工作台进入待办", panel: "home" },
        { id: "approve-2", label: "2 打开审批抽屉", panel: "todo" },
        { id: "approve-3", label: "3 同意审批完成", panel: "todo" },
      ],
      hint: "路径 A：工作台工具条「进入待办」→ 待办「审批」→ 抽屉「同意审批」。",
    },
    riskloop: {
      steps: [
        { id: "riskloop-1", label: "1 进入风险中心", panel: "home" },
        { id: "riskloop-2", label: "2 打开核查单", panel: "risk" },
        { id: "riskloop-3", label: "3 跳转应收跟进", panel: "risk" },
        { id: "riskloop-4", label: "4 发起催收闭环", panel: "ar" },
      ],
      hint: "路径 B：风险预警 → 核查抽屉 → 应收总览 → 发起催收。",
    },
    closeout: {
      steps: [
        { id: "closeout-1", label: "1 从工作台进入月结", panel: "home" },
        { id: "closeout-2", label: "2 处理费用阻塞项", panel: "close" },
        { id: "closeout-3", label: "3 推进关账完成", panel: "close" },
      ],
      hint: "路径 C：月结进度 → 月结中心「处理阻塞」→ 标记清理并推进关账。",
    },
    expense: {
      steps: [
        { id: "expense-1", label: "1 进入费用管理·报销审核", panel: "home" },
        { id: "expense-2", label: "2 打开报销审核抽屉", panel: "expense" },
        { id: "expense-3", label: "3 审核通过完成", panel: "expense" },
      ],
      hint: "路径 D：侧栏「费用管理 / 报销审核」→ 列表「审核」→ 抽屉「审核通过」。",
    },
  };

  const shell = document.getElementById("product");
  const panelBody = document.getElementById("panel-body");
  const crumb = document.getElementById("fos-crumb");
  const drawer = document.getElementById("drawer");
  const drawerTitle = document.getElementById("drawer-title");
  const drawerId = document.getElementById("drawer-id");
  const drawerBody = document.getElementById("drawer-body");
  const drawerClose = document.getElementById("drawer-close");
  const toast = document.getElementById("toast");
  const guideBox = document.getElementById("demo-guide");
  const guideSteps = document.getElementById("guide-steps");
  const guideHint = document.getElementById("guide-hint");
  const flowChips = document.querySelectorAll(".flow-chip");

  let currentPanel = "home";
  let currentFlow = "free";
  let guideIndex = 0;
  let toastTimer = null;

  function showToast(msg) {
    if (!toast) return;
    toast.hidden = false;
    toast.textContent = msg;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.hidden = true;
    }, 2200);
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.hidden = true;
    shell.classList.remove("with-drawer");
  }

  function openDrawer(key) {
    const data = drawers[key];
    if (!data || !drawer) return;
    drawer.hidden = false;
    shell.classList.add("with-drawer");
    drawerTitle.textContent = data.title;
    drawerId.textContent = data.id;
    drawerBody.innerHTML = data.html;
    bindInteractive(drawerBody);
    advanceGuideByAction(
      key === "pay"
        ? "approve-2"
        : key === "risk"
          ? "riskloop-2"
          : key === "collect"
            ? "riskloop-4"
            : key === "closeTask"
              ? "closeout-2"
              : key === "expense"
                ? "expense-2"
                : null
    );
    pulseGuideTargets();
  }

  function setNavActive(id) {
    document.querySelectorAll(".fos-nav[data-panel]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-panel") === id);
    });
  }

  function renderPanel(id) {
    const panel = panels[id] || panels.home;
    currentPanel = id;
    closeDrawer();
    if (crumb) crumb.textContent = crumbs[id] || crumbs.home;
    panelBody.innerHTML = panel.html;
    setNavActive(id);
    bindInteractive(panelBody);
    syncGuideUI();
    pulseGuideTargets();
    panelBody.scrollTop = 0;
  }

  function bindInteractive(root) {
    root.querySelectorAll("[data-panel]").forEach((el) => {
      el.addEventListener("click", () => {
        const id = el.getAttribute("data-panel");
        const guide = el.getAttribute("data-guide");
        if (guide) advanceGuideByAction(guide);
        renderPanel(id);
      });
    });
    root.querySelectorAll("[data-drawer]").forEach((el) => {
      el.addEventListener("click", () => {
        const guide = el.getAttribute("data-guide");
        if (guide) advanceGuideByAction(guide);
        openDrawer(el.getAttribute("data-drawer"));
      });
    });
    root.querySelectorAll("[data-action]").forEach((el) => {
      el.addEventListener("click", () => handleAction(el.getAttribute("data-action"), el.getAttribute("data-guide")));
    });
    root
      .querySelectorAll(
        "#todo-tabs button, #risk-pills button, .tabs-inline button, #expense-tabs button, #ar-customer-tabs button, #collect-tabs button, #alloc-tabs button, #invoice-tabs button, #fund-tabs button, .design-toolbar button"
      )
      .forEach((btn) => {
        if (btn.hasAttribute("data-panel") || btn.hasAttribute("data-drawer") || btn.hasAttribute("data-action")) {
          return;
        }
        btn.addEventListener("click", () => {
          const group = btn.parentElement;
          group.querySelectorAll("button").forEach((b) => b.classList.remove("on"));
          btn.classList.add("on");
        });
      });
  }

  function handleAction(action, guideId) {
    if (guideId) advanceGuideByAction(guideId);
    if (action === "approve") {
      showToast("已同意审批 · PAY-2310-089 流转至出纳付款");
      closeDrawer();
      completeGuideIf("approve-3");
    } else if (action === "reject") {
      showToast("已驳回 · 已通知发起人补充材料");
      closeDrawer();
    } else if (action === "misreport") {
      showToast("已标记为误报 · 规则样本已反馈");
      closeDrawer();
    } else if (action === "goto-ar") {
      closeDrawer();
      renderPanel("ar");
      advanceGuideByAction("riskloop-3");
      showToast("已进入应收总览 · 可对逾期客户发起催收");
    } else if (action === "collect-done") {
      showToast("催收已发起 · 已同步销售负责人，形成闭环");
      closeDrawer();
      completeGuideIf("riskloop-4");
    } else if (action === "close-done") {
      showToast("费用阻塞已清理 · 凭证处理已解锁，进度 76% → 92%");
      closeDrawer();
      advanceGuideByAction("closeout-3");
      renderPanel("close");
      completeGuideIf("closeout-3");
    } else if (action === "close-final") {
      if (currentFlow === "closeout" && guideIndex < 2) {
        showToast("请先处理费用结账阻塞项");
        const btn = panelBody.querySelector('[data-guide="closeout-2"]');
        if (btn) btn.classList.add("guide-pulse");
        return;
      }
      showToast("月结关账完成 · 8 月窗口已关闭，报表可导出");
      completeGuideIf("closeout-3");
    } else if (action === "expense-done") {
      showToast("报销已通过 · TR-3301 进入支付队列");
      closeDrawer();
      completeGuideIf("expense-3");
    } else if (action === "expense-reject") {
      showToast("已打回 · 已通知王敏补充材料");
      closeDrawer();
    } else if (action === "close") {
      closeDrawer();
    }
  }

  function setFlow(flowId) {
    currentFlow = flowId;
    guideIndex = 0;
    flowChips.forEach((chip) => {
      const on = chip.getAttribute("data-flow") === flowId;
      chip.classList.toggle("on", on);
      chip.setAttribute("aria-selected", on ? "true" : "false");
    });
    syncGuideUI();
    const flow = flows[flowId];
    if (flow && flow.steps[0]) {
      renderPanel(flow.steps[0].panel);
    } else {
      pulseGuideTargets();
    }
  }

  function syncGuideUI() {
    const flow = flows[currentFlow];
    if (!flow || currentFlow === "free") {
      guideBox.hidden = true;
      return;
    }
    guideBox.hidden = false;
    guideHint.textContent = flow.hint;
    guideSteps.innerHTML = flow.steps
      .map((s, i) => {
        const state = i < guideIndex ? "done" : i === guideIndex ? "current" : "";
        return `<li class="${state}">${s.label}</li>`;
      })
      .join("");
  }

  function advanceGuideByAction(stepId) {
    if (!stepId || currentFlow === "free") return;
    const flow = flows[currentFlow];
    if (!flow) return;
    const idx = flow.steps.findIndex((s) => s.id === stepId);
    if (idx >= 0 && idx >= guideIndex) {
      guideIndex = Math.min(idx + 1, flow.steps.length);
      syncGuideUI();
    }
  }

  function completeGuideIf(stepId) {
    advanceGuideByAction(stepId);
    if (currentFlow === "approve" && guideIndex >= flows.approve.steps.length) {
      showToast("路径 A 完成 · 待办审批闭环");
    }
    if (currentFlow === "riskloop" && guideIndex >= flows.riskloop.steps.length) {
      showToast("路径 B 完成 · 风险处置闭环");
    }
    if (currentFlow === "closeout" && guideIndex >= flows.closeout.steps.length) {
      showToast("路径 C 完成 · 月结推进闭环");
    }
    if (currentFlow === "expense" && guideIndex >= flows.expense.steps.length) {
      showToast("路径 D 完成 · 报销审核闭环");
    }
  }

  function pulseGuideTargets() {
    document.querySelectorAll(".guide-pulse").forEach((el) => el.classList.remove("guide-pulse"));
    if (currentFlow === "free") return;
    const flow = flows[currentFlow];
    if (!flow || guideIndex >= flow.steps.length) return;
    const step = flow.steps[guideIndex];
    document.querySelectorAll(`[data-guide="${step.id}"]`).forEach((el) => {
      el.classList.add("guide-pulse");
    });
  }

  document.querySelectorAll(".fos-nav[data-panel]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const guide = btn.getAttribute("data-guide");
      if (guide) advanceGuideByAction(guide);
      renderPanel(btn.getAttribute("data-panel"));
    });
  });
  if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
  flowChips.forEach((chip) => {
    chip.addEventListener("click", () => setFlow(chip.getAttribute("data-flow")));
  });

  renderPanel("home");
  setFlow("free");
})();
