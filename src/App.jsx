import "./App.css";

const baseUrl = import.meta.env.BASE_URL;
const appLogo = `${baseUrl}logo-kovi-diet.webp`;
// const appFeatures = [
//   "Подсчёт калорий и нутриентов (КБЖУ)",
//   "Распознавание еды по фото с помощью ИИ",
//   "Голосовой ввод продуктов",
//   "Сканирование штрихкодов продуктов",
//   "Недельные планы питания от ИИ",
//   "Рецепты с пошаговыми инструкциями",
//   "Список покупок на основе плана питания",
//   "Синхронизация с Health Connect (шаги, активные калории)",
//   "Анализ рациона и персональные рекомендации",
//   "Трекер воды",
//   "Отслеживание веса",
// ];

const installOptions = [
  {
    id: "ios",
    icon: `${baseUrl}icon-ios.png`,
    title: "iPhone / iPad",
    description: "Установите приложение через App Store",
    qr: `${baseUrl}qr-ios.png`,
    url: "https://apps.apple.com/ru/app/kovi-%D0%B8%D0%B8-%D0%B4%D0%BD%D0%B5%D0%B2%D0%BD%D0%B8%D0%BA-%D0%BF%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F/id6760180640",
    buttonText: "Открыть App Store",
  },
    {
    id: "rustore",
    icon: `${baseUrl}icon-rustore.png`,
    title: "RuStore",
    description: "Установите приложение через RuStore",
    qr: `${baseUrl}qr-rustore.png`,
    url: "https://www.rustore.ru/catalog/app/com.danilapryadko.kovidiet",
    buttonText: "Открыть RuStore",
  },
  {
    id: "android",
    icon: `${baseUrl}icon-android.png`,
    title: "Google Play",
    description: "Установите приложение через Google Play",
    qr: `${baseUrl}qr-android.png`,
    url: "https://play.google.com/store/apps/details?id=com.danilapryadko.kovidiet&pcampaignid=web_share",
    buttonText: "Открыть Google Play",
    
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

        <div className="hero-titleRow">
          <img
            className="hero-logo"
            src={appLogo}
            alt="Логотип приложения KoviDiet для подсчёта калорий и КБЖУ"
          />

          <div className="hero-titleText">
            <h1>Kovi Diet - приложение для подсчёта калорий и КБЖУ</h1>
            <p className="hero-appName">KOVI DIET</p>
          </div>
        </div>

        <p className="subtitle">
          Установите приложение для контроля питания: счётчик калорий и КБЖУ,
          распознавание еды по фото, сканер штрихкодов, трекер воды и веса.
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
                  alt={`Иконка магазина приложений: ${item.title}`}
                />
              </a>

              <h3 className="card__title">{item.title}</h3>

              <div className="qr-wrap">               
                <a
                  className="qr-wrap qr-wrap--link"
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Открыть страницу загрузки: ${item.title}`}
                >
                  <img
                    className="qr"
                    src={item.qr}
                    alt={`QR-код: ${item.title}`}
                  />
                </a> 
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

      {/* <section className="help">
        <h2>Функции приложения KoviDiet</h2>
        <p>
          KoviDiet помогает вести дневник питания, считать калории и нутриенты,
          а также получать рекомендации по рациону на основе ваших данных.
        </p>
        <ul>
          {appFeatures.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section> */}

      <section className="help">
        <h2>Как установить приложение</h2>
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
