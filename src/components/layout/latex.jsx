import katex from 'katex';
import 'katex/dist/katex.min.css';

const LatexRenderer = ({ content }) => {
  if (!content) return null;

  // Split content into LaTeX and normal text parts
  const parts = content.split(/(\\{.*?\\})/);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('\\{') && part.endsWith('\\}')) {
          const latexContent = part.slice(2, -2);
          try {
            const html = katex.renderToString(latexContent, {
              throwOnError: false,
              displayMode: false
            });
            return <span key={index} dangerouslySetInnerHTML={{ __html: html }} />;
          } catch (error) {
            console.error('LaTeX render error:', error);
            return <span key={index}>{part}</span>;
          }
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
};

export default LatexRenderer;