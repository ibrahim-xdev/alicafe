var io = new IntersectionObserver(
  function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("on");
        if (e.target.dataset.n) count(e.target);
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 },
);
document.querySelectorAll(".rv").forEach(function (el, i) {
  el.style.transitionDelay = (i % 4) * 0.1 + "s";
  io.observe(el);
});
document.querySelectorAll("[data-n]").forEach(function (el) {
  io.observe(el);
});
document.querySelectorAll(".links a").forEach(function (a) {
  a.addEventListener("click", function () {
    document.getElementById("lk").classList.remove("open");
  });
});
function count(el) {
  var n = +el.dataset.n,
    d = +el.dataset.d || 0,
    s = null;
  function f(t) {
    s = s || t;
    var p = Math.min((t - s) / 1500, 1);
    el.textContent = (n * p).toFixed(d);
    if (p < 1) requestAnimationFrame(f);
  }
  requestAnimationFrame(f);
}
