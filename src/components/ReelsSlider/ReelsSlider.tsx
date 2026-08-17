import { useEffect, useState } from "react";
import { getRealsSlider } from "../../services/api";
import Carousel from 'react-bootstrap/Carousel';
import "./ReelsSlider.css";

const ReelsSlider = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reals, setReals] = useState<any[]>([]);
  const [index, setIndex] = useState(0);
  const [reelsCount, setReelsCount] = useState(3);
  const [likedReels, setLikedReels] = useState<Set<number>>(new Set());
  const [showComments, setShowComments] = useState<number | null>(null);

  useEffect(() => {
    const updateReelsCount = () => {
      if (window.innerWidth >= 992) {
        setReelsCount(4);
      } else if (window.innerWidth >= 768) {
        setReelsCount(2);
      } else {
        setReelsCount(1);
      }
    };

    updateReelsCount();
    window.addEventListener('resize', updateReelsCount);
    return () => window.removeEventListener('resize', updateReelsCount);
  }, []);

  useEffect(() => {
    const fetchReals = async () => {
      try {
        setLoading(true);
        const response = await getRealsSlider();
        if (response.success && response.data) {
          setReals(response.data);
        }
      } catch (error) {
        setError("Failed to load reels");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchReals();
  }, []);

  const shareReel = (url: string) => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this reel!',
        url: url
      });
    } else {
      navigator.clipboard.writeText(url).then(() => {
        alert('Link copied to clipboard!');
      });
    }
  };

  const getPlatformName = (url: string) => {
    if (url.includes('instagram.com')) return 'Instagram';
    if (url.includes('tiktok.com')) return 'TikTok';
    if (url.includes('youtube.com') || url.includes('youtu.be')) return 'YouTube';
    if (url.includes('facebook.com')) return 'Facebook';
    return 'Social';
  };

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://via.placeholder.com/450x800/111827/ffffff?text=No+Image';
  };

  const toggleLike = (reelId: number) => {
    setLikedReels(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(reelId)) {
        newLiked.delete(reelId);
      } else {
        newLiked.add(reelId);
      }
      return newLiked;
    });
  };

  const toggleComments = (reelId: number) => {
    setShowComments(prev => prev === reelId ? null : reelId);
  };

  // Mock comments data - in real app this would come from API
  const mockComments: { [key: number]: any[] } = {
    1: [
      { id: 1, user: 'Ahmed', text: 'Amazing content! 🔥', likes: 45 },
      { id: 2, user: 'Sara', text: 'Love this!', likes: 23 },
    ],
    2: [
      { id: 3, user: 'Mohamed', text: 'Great work!', likes: 12 },
    ],
  };

  if (loading) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-white">Loading reels...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-white">{error}</div>
      </div>
    );
  }

  const activeReals = reals
  .filter((real) => real.status)
  .sort((a, b) => a.display_order - b.display_order);

  const groupedReels: any[][] = [];
  for (let i = 0; i < activeReals.length; i += reelsCount) {
    groupedReels.push(activeReals.slice(i, i + reelsCount));
  }

  if (activeReals.length === 0) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center p-4">
        <div className="text-center">
          <span className="material-symbols-outlined fs-1 text-secondary mb-4">movie</span>
          <h2 className="text-white fw-bold mb-2">No Reels Yet</h2>
          <p className="text-secondary">Check back later for exciting product videos!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 position-relative">
      <Carousel 
        activeIndex={index} 
        onSelect={handleSelect}
        interval={null}
        controls={groupedReels.length > 1}
        indicators={groupedReels.length > 1}
        className="reels-carousel"
      >
        {groupedReels.map((group, groupIndex) => (
          <Carousel.Item key={groupIndex}>
            <div className="row g-3">
              {group.map((real: any) => (
                <div
                  className={`col-12 ${
                    reelsCount === 4
                      ? "col-lg-3"
                      : reelsCount === 2
                      ? "col-md-6"
                      : ""
                  }`}
                  key={real.id}
                >
                  <div className="reel-content position-relative w-100" style={{ height: '80vh' }}>
                    {/* Video Container */}
                    <div className="reel-video-container position-absolute w-100 h-100">
                      {real.social_video_url ? (
                        <>
                          {real.thumbnail_image ? (
                            <div className="w-100 h-100 position-relative">
                              <img src={real.thumbnail_image} alt={real.title} className="w-100 h-100 object-fit-cover" onError={handleImageError} />
                              <a href={real.social_video_url} target="_blank" rel="noopener noreferrer" className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50 hover-bg-opacity-70 text-decoration-none">
                                <span className="material-symbols-outlined fs-1 text-white">play_circle</span>
                              </a>
                            </div>
                          ) : (
                            <div className="w-100 h-100 d-flex align-items-center justify-content-center bg-secondary">
                              <a href={real.social_video_url} target="_blank" rel="noopener noreferrer" className="d-flex flex-column align-items-center gap-3 text-white text-decoration-none">
                                <span className="material-symbols-outlined fs-1">play_circle</span>
                                <span className="small">Watch on {getPlatformName(real.social_video_url)}</span>
                              </a>
                            </div>
                          )}
                        </>
                      ) : real.video_url ? (
                        <video
                          src={real.video_url}
                          controls
                          className="w-100 h-100 object-fit-cover"
                        />
                      ) : real.thumbnail_image ? (
                        <img
                          src={real.thumbnail_image}
                          alt={real.title}
                          className="w-100 h-100 object-fit-cover"
                        />
                      ) : (
                        <div className="w-100 h-100 d-flex align-items-center justify-content-center bg-secondary">
                          <span className="text-white">No Video</span>
                        </div>
                      )}
                    </div>

                    {/* Overlay Gradient */}
                    <div className="reel-overlay position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)', pointerEvents: 'none' }}></div>

                    {/* Right Side Actions */}
                    <div className="reel-actions position-absolute top-0 end-0 d-flex flex-column align-items-center gap-4 p-3" style={{ bottom: '80px', zIndex: 10 }}>
                      {/* Like Button */}
                      <button onClick={() => toggleLike(real.id)} className="btn btn-link text-white d-flex flex-column align-items-center gap-1 p-0">
                        <div className={`rounded-circle d-flex align-items-center justify-content-center ${likedReels.has(real.id) ? 'bg-danger' : 'bg-white bg-opacity-20'}`} style={{ width: '40px', height: '40px' }}>
                          <span className="material-symbols-outlined">{likedReels.has(real.id) ? 'favorite' : 'favorite_border'}</span>
                        </div>
                        <span className="small">{real.likes_count || 0}</span>
                      </button>

                      {/* Comments Button */}
                      <button onClick={() => toggleComments(real.id)} className="btn btn-link text-white d-flex flex-column align-items-center gap-1 p-0">
                        <div className="rounded-circle bg-white bg-opacity-20 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                          <span className="material-symbols-outlined">chat_bubble</span>
                        </div>
                        <span className="small">{real.comments_count || 0}</span>
                      </button>

                      {/* Share Button */}
                      <button onClick={() => shareReel(real.social_video_url || real.video_url || '')} className="btn btn-link text-white d-flex flex-column align-items-center gap-1 p-0">
                        <div className="rounded-circle bg-white bg-opacity-20 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                          <span className="material-symbols-outlined">share</span>
                        </div>
                        <span className="small">Share</span>
                      </button>

                      {/* Watch on Platform */}
                      {real.social_video_url && (
                        <a href={real.social_video_url} target="_blank" rel="noopener noreferrer" className="btn btn-link text-white d-flex flex-column align-items-center gap-1 p-0 text-decoration-none">
                          <div className="rounded-circle bg-white bg-opacity-20 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                            <span className="material-symbols-outlined">open_in_new</span>
                          </div>
                          <span className="small">{getPlatformName(real.social_video_url)}</span>
                        </a>
                      )}
                    </div>

                    {/* Comments Drawer */}
                    {showComments === real.id && (
                      <div className="position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-95 rounded-top-3 p-3" style={{ zIndex: 20, maxHeight: '60%', overflowY: 'auto' }}>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h6 className="text-white mb-0">Comments</h6>
                          <button onClick={() => toggleComments(real.id)} className="btn btn-link text-white p-0">
                            <span className="material-symbols-outlined">close</span>
                          </button>
                        </div>
                        {mockComments[real.id]?.length > 0 ? (
                          mockComments[real.id].map((comment: any) => (
                            <div key={comment.id} className="mb-3 pb-2 border-bottom border-secondary">
                              <div className="d-flex align-items-center gap-2">
                                <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                                  <span className="text-white small fw-bold">{comment.user[0]}</span>
                                </div>
                                <div>
                                  <p className="text-white small fw-bold mb-0">{comment.user}</p>
                                  <p className="text-white-50 small mb-0">{comment.text}</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center gap-3 mt-2 ms-5">
                                <button className="btn btn-link text-white-50 small p-0">
                                  <span className="material-symbols-outlined small">favorite_border</span> {comment.likes}
                                </button>
                                <button className="btn btn-link text-white-50 small p-0">Reply</button>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-white-50 text-center small">No comments yet. Be the first to comment!</p>
                        )}
                      </div>
                    )}

                    {/* Bottom Info */}
                    <div className="reel-info position-absolute bottom-0 start-0 w-100 p-4" style={{ zIndex: 10 }}>
                      {real.title && (
                        <h3 className="text-white fw-bold mb-1">{real.title}</h3>
                      )}
                      {real.social_video_url && (
                        <p className="text-white text-opacity-80 small">Watch on {getPlatformName(real.social_video_url)}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ReelsSlider;
