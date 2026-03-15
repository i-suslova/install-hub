import "./App.css";

const baseUrl = import.meta.env.BASE_URL;

const installOptions = [
  {
    id: "ios",
    icon: `${baseUrl}icon-ios.png`,
    title: "iPhone / iPad",
    description: "Установите приложение через App Store",
    qr: `${baseUrl}qr-ios.png`,
    url: "https://example.com/ios",
    buttonText: "Открыть App Store",
  },
  {
    id: "android",
    icon: `${baseUrl}icon-android.png`,
    title: "Google Play",
    description: "Установите приложение через Google Play",
    qr: `${baseUrl}qr-android.png`,
    url: "https://example.com/android",
    buttonText: "Открыть Google Play",
  },
  {
    id: "rustore",
    icon: `${baseUrl}icon-rustore.png`,
    title: "RuStore",
    description: "Установите приложение через RuStore",
    qr: `${baseUrl}qr-rustore.png`,
    url: "https://example.com/rustore",
    buttonText: "Открыть RuStore",
  },
];

function getDeviceType() {
  const userAgent = navigator.userAgent.toLowerCase();

  if (/iphone|ipad|ipod/.test(userAgent)) return "ios";
  if (/android/.test(userAgent)) return "android";

  return "desktop";
}

function getDeviceMessage(deviceType) {
  switch (deviceType) {
    case "ios":
      return "Вы используете iPhone или iPad. Нажмите кнопку App Store, чтобы установить приложение.";
    case "android":
      return "Вы используете Android. Установите приложение через Google Play или RuStore.";
    case "desktop":
      return "Откройте камеру на телефоне и отсканируйте нужный QR-код, чтобы установить приложение.";
    default:
      return "Выберите способ установки приложения.";
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

              <a
                className="card__iconLink"
                href={item.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Открыть: ${item.title}`}
              >
                <img
                  className="card__iconImage"
                  src={item.icon}
                  alt={`${item.title} icon`}
                />
              </a>

              <h2>{item.title}</h2>

              <div className="qr-wrap">
                <img className="qr" src={item.qr} alt={`QR-код: ${item.title}`} />
              </div>

              <a
                className="card__descriptionLink"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                {item.description}
              </a>

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