import { Helmet } from "react-helmet-async";

export default function PageSEO({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
}) {
  const baseUrl = window.location.origin;
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const defaultImage = `${baseUrl}/og-image.png`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title} | Prime Rank</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={`${title} | Prime Rank`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Prime Rank" />

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | Prime Rank`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Prime Rank" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  );
}
