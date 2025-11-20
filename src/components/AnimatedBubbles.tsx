const AnimatedBubbles = () => {
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 30,
    left: Math.random() * 100,
    animationDuration: Math.random() * 4 + 5,
    delay: Math.random() * 2,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-primary/50 border-2 border-primary/60 backdrop-blur-sm animate-float"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: '-100px',
            animationDuration: `${bubble.animationDuration}s`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBubbles;
