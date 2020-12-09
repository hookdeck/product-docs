import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import loadCrisp from "./loadCrisp";
import loadSegment from "./loadSegment";
if (ExecutionEnvironment.canUseDOM) {
  loadCrisp();
  loadSegment();
  fetch("https://api.hookdeck.io/session/me")
    .then((r) => r.json())
    .then((user) => {
      if (window.analytics) {
        window.analytics.identify(user.id, {
          name: user.name,
          email: user.email,
          createdAt: user.created_at,
        });
      }
      if (window.$crisp) {
        window.$crisp.push(["set", "user:email", [user.email]]);
        window.$crisp.push(["set", "user:nickname", [user.name]]);
      }
    })
    .catch(() => null);
}
