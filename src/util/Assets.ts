import * as commonmark from 'commonmark';
import commonmarkHelpers from 'commonmark-helpers';

function arbitrary(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

export function getThumbnailImageFromMarkdown(input: string): string[] {
  const walker = new commonmark.Parser().parse(input).walker();

  const imgs: string[] = [];

  let e;
  while ((e = walker.next())) {
    if (e.node.type === 'image') {
      // eslint-disable-next-line no-unused-expressions
      e.node.destination && imgs.push(e.node.destination);
    }
  }

  return imgs;
}

export function getMarkdownBrief(input: string): string {
  const walker = new commonmark.Parser().parse(input).walker();
  let e;
  while ((e = walker.next())) {
    if (
      !!e.node.parent &&
      e.node.parent.type === 'document' &&
      e.node.type === 'paragraph'
    ) {
      return commonmarkHelpers.text(e.node);
    }
  }
  return '';
}

export default {
  arbitrary,
};
