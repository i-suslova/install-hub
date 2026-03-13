import "./App.css";

const baseUrl = import.meta.env.BASE_URL;

const installOptions = [
  {
    id: "ios",
    icon: "🍎",
    title: "iPhone / iPad",
    description: "Скачайте приложение через App Store",
    qr: `${baseUrl}qr-ios.png`,
    // url: "https://example.com/ios",
    buttonText: "Открыть в App Store",
  },
  {
    id: "android",
    icon: "🤖",
    title: "Android",
    description: "Скачайте приложение для Android",
    qr: `${baseUrl}qr-android.png`,
    // url: "https://example.com/android",
    buttonText: "Открыть для Android",
  },
  {
    id: "desktop",
    icon: "💻",
    title: "Для компьютера",
    description:
      "Откройте нужный QR-код на экране и отсканируйте его телефоном",
    qr: `${baseUrl}qr-desktop.png`,
    // url: "https://example.com/install",
    buttonText: "Открыть ссылку",
  },
  {
    id: "alternative",
    icon: "⬇️",
    title: "Ещё вариант",
    description: "Если нужен еще какой-либо магазин приложений",
    qr: `${baseUrl}qr-alt.png`,
    // url: "https://example.com/alternative",
    buttonText: "Другой вариант",
  },
];

function getDeviceType() {
  const userAgent = navigator.userAgent.toLowerCase();

  const isIPhone = /iphone|ipad|ipod/.test(userAgent);
  const isAndroid = /android/.test(userAgent);
  const isDesktop = !isIPhone && !isAndroid;

  if (isIPhone) return "ios";
  if (isAndroid) return "android";
  if (isDesktop) return "desktop";

  return "alternative";
}

function getDeviceMessage(deviceType) {
  switch (deviceType) {
    case "ios":
      return "Похоже, вы используете iPhone или iPad. Рекомендуем установить приложение через App Store.";
    case "android":
      return "Похоже, вы используете Android. Рекомендуем открыть установку для Android.";
    case "desktop":
      return "Вы открыли страницу на компьютере. Удобнее всего отсканировать нужный QR-код телефоном.";
    default:
      return "Выберите подходящий способ установки приложения.";
  }
}

function App() {
  const deviceType = getDeviceType();
  const deviceMessage = getDeviceMessage(deviceType);

  return (
    <main className="install-page">
      <section className="hero-section">
        <p className="eyebrow">Быстрая установка</p>
        <h1>Установите приложение</h1>
        <p className="subtitle">
          Выберите подходящий способ установки. Отсканируйте QR-код или нажмите
          кнопку ниже.
        </p>

        <div className="device-hint">
          <span className="device-hint__label">Рекомендация:</span>
          <span>{deviceMessage}</span>
        </div>
      </section>

      <section className="cards">
        {installOptions.map((item) => {
          const isRecommended = item.id === deviceType;

          return (
            <article
              className={`card ${isRecommended ? "card--recommended" : ""}`}
              key={item.id}
            >
              {isRecommended && (
                <div className="badge" aria-label="Рекомендуемый вариант">
                  Рекомендуется
                </div>
              )}

              <div className="card__icon" aria-hidden="true">
                {item.icon}
              </div>

              <h2>{item.title}</h2>

              <div className="qr-wrap">
                <img className="qr" src={item.qr} alt={`QR-код: ${item.title}`} />
              </div>

              <p className="card__description">{item.description}</p>

              <a
                className="btn"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                {item.buttonText}
              </a>
            </article>
          );
        })}
      </section>

      <section className="help">
        <h3>Нужна помощь?</h3>
        <p>
          Если вы уже открыли страницу с телефона, просто нажмите кнопку под
          нужным вариантом.
        </p>
        <p>
          Если QR-код не сканируется, попробуйте перейти по кнопке напрямую.
        </p>
      </section>
    </main>
  );
}

export default App;