
const GoogleRating = () => (
  <div className="flex flex-col items-center mb-4">
    <div className="flex items-center gap-2 mb-2">
      <img
        src="/images/icons/google.webp"
        alt="Google"
        className="h-6"
      />
      <span className="text-lg font-semibold text-foreground">4.9</span>
      <div className="flex items-center gap-1">
        <img
          src="/images/icons/star.webp"
          alt="Star"
          className="h-5"
        />
        
      </div>
    </div>
  </div>
);

export default GoogleRating;