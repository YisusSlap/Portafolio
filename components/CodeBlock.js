import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = ({ className, children }) => {
  const language = className?.replace('language-', '') || '';
  return (
    <SyntaxHighlighter language={language} style={darcula}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;