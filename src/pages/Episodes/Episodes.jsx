
import { useEffect, useRef, useState } from "react";
import {
  FiPlay,
  FiX,
  FiBookOpen,
  FiUsers,
  FiArrowLeft,
  FiVideo,
  FiHeart,
} from "react-icons/fi";

import { episodes } from "../../data/episodes";
import "./Episodes.css";

function Episodes() {
  const [selectedEpisodeId, setSelectedEpisodeId] = useState(null);
  const videoRef = useRef(null);

  const selectedEpisode = episodes.find(
    (episode) => episode.id === selectedEpisodeId
  );

  // Démarrer la vidéo sélectionnée.
  useEffect(() => {
    if (!selectedEpisodeId || !videoRef.current) return;

    const video = videoRef.current;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        // Certains navigateurs peuvent bloquer la lecture automatique.
        // Les contrôles restent disponibles pour lancer la vidéo manuellement.
        console.warn("La lecture automatique n'a pas pu démarrer :", error);
      }
    };

    playVideo();
  }, [selectedEpisodeId]);

  const openEpisode = (episodeId) => {
    setSelectedEpisodeId(episodeId);
  };

  const closeEpisode = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }

    setSelectedEpisodeId(null);
  };

  return (
    <main className="episodes-page" dir="rtl">
      {/* HERO */}
      <section className="episodes-hero">
        <div className="episodes-hero-container">
          <div className="episodes-hero-content">
            <span className="episodes-eyebrow">
              <FiBookOpen />
              فضاء Teacher Shine التربوي
            </span>

            <h1>
              التعليم موش كان دروس...
              <span> التعليم زادة فهم واهتمام.</span>
            </h1>

            <p>
              كل طفل عندو شخصيتو وطريقتو في التعلّم.
              اكتشفوا معانا نصائح وأفكار بسيطة تعاونكم
              تفهموا تلامذتكم وتتصرّفوا مع مختلف المواقف في القسم.
            </p>

            <a href="#episodes-list" className="episodes-hero-button">
              اكتشفوا الحلقات
              <FiArrowLeft />
            </a>

            <div className="episodes-hero-stats">
              <div>
                <strong>{episodes.length}</strong>
                <span>حلقات متوفّرة</span>
              </div>

              <div>
                <strong>مجّاني</strong>
                <span>متاحة للجميع</span>
              </div>

              <div>
                <strong>نصائح</strong>
                <span>من الواقع التربوي</span>
              </div>
            </div>
          </div>

          <div className="episodes-hero-decoration" aria-hidden="true">
            <div className="episodes-hero-icon">
              <FiUsers />
            </div>

            <span className="episodes-decoration-dot dot-one" />
            <span className="episodes-decoration-dot dot-two" />
            <span className="episodes-decoration-dot dot-three" />
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="episodes-intro">
        <div className="episodes-section-heading">
          <span className="episodes-section-label">
            نتعلّموا ونتقاسموا الخبرات
          </span>

          <h2>
            نصائح تهمّ كل <span>معلّم ومعلّمة</span>
          </h2>

          <p>
            من التعامل مع التلميذ الخجول إلى حلّ المشاكل بين التلامذة،
            نكتشفوا مع بعضنا طرق بسيطة لتحسين الحياة اليومية في القسم.
          </p>
        </div>

        <div className="episodes-count">
          <FiVideo />
          <span>{episodes.length} حلقات للمشاهدة</span>
        </div>
      </section>

      {/* EPISODES */}
      <section className="episodes-list-section" id="episodes-list">
        <div className="episodes-grid">
          {episodes.map((episode) => {
            const isSelected = selectedEpisodeId === episode.id;

            return (
              <article
                className={`episode-card${isSelected ? " selected" : ""}`}
                key={episode.id}
              >
                {/* VIDEO / COVER */}
                <div className="episode-card-visual">
                  {isSelected ? (
                    <div className="episode-inline-player">
                      <video
                        ref={videoRef}
                        key={episode.id}
                        className="episode-video-player"
                        controls
                        autoPlay
                        playsInline
                        preload="metadata"
                      >
                        <source src={episode.video} type="video/mp4" />
                        متصفحك لا يدعم تشغيل الفيديو.
                      </video>

                      <button
                        type="button"
                        className="episode-player-close"
                        onClick={closeEpisode}
                        aria-label="إغلاق الفيديو"
                      >
                        <FiX />
                        <span>إغلاق الفيديو</span>
                      </button>
                    </div>
                  ) : (
                    <>
                      <span className="episode-card-number">
                        {episode.number}
                      </span>

                      <div className="episode-card-visual-icon">
                        <FiBookOpen />
                      </div>

                      <button
                        type="button"
                        className="episode-play-button"
                        onClick={() => openEpisode(episode.id)}
                        aria-label={`شاهد ${episode.title}`}
                      >
                        <FiPlay />
                      </button>

                      <span className="episode-card-category">
                        {episode.category}
                      </span>
                    </>
                  )}
                </div>

                {/* EPISODE INFORMATION */}
                <div className="episode-card-content">
                  <span className="episode-card-label">
                    {episode.number}
                  </span>

                  <h3>{episode.title}</h3>

                  <p>{episode.description}</p>

                  {!isSelected ? (
                    <button
                      type="button"
                      className="episode-watch-button"
                      onClick={() => openEpisode(episode.id)}
                    >
                      <FiPlay />
                      شاهد الحلقة
                    </button>
                  ) : (
                    <div className="episode-playing-status">
                      <span className="episode-playing-indicator" />
                      الحلقة مفتوحة للمشاهدة
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* BOTTOM MESSAGE */}
      <section className="episodes-bottom-banner">
        <div className="episodes-bottom-icon">
          <FiHeart />
        </div>

        <div>
          <h2>كل طفل يستحقّ معلّم يفهمو.</h2>
          <p>
            مع بعضنا، نعملوا من القسم فضاء فيه احترام،
            تشجيع، ثقة وفرصة لكل طفل باش يتعلّم وينجح.
          </p>
        </div>
      </section>

      {/* Accessible episode information */}
      {selectedEpisode && (
        <span className="sr-only" aria-live="polite">
          بصدد مشاهدة {selectedEpisode.title}
        </span>
      )}
    </main>
  );
}

export default Episodes;
