import EventEmitter from 'events';
import type TypedEmitter from 'typed-emitter';

import type { Book, Highlight, SyncMode, KindleFile } from '~/models';

interface MessageEvents {
  obsidianReady: () => void;
  login: () => void;
  loginComplete: (success: boolean) => void;
  fetchingBooks: () => void;
  fetchingBooksSuccess: (booksToSync: Book[], remoteBooks: Book[]) => void;
  syncSessionStart: (mode: SyncMode) => void;
  syncSessionSuccess: () => void;
  syncSessionFailure: (message: string) => void;
  syncBook: (book: Book, index: number) => void;
  syncBookSuccess: (book: Book, highlights: Highlight[]) => void;
  syncBookFailure: (book: Book, message: string) => void;
  resyncBook: (file: KindleFile) => void;
  resyncComplete: (file: KindleFile, diffCount: number) => void;
  resyncFailure: (file: KindleFile, message: string) => void;
}

export const ee = new EventEmitter() as TypedEmitter<MessageEvents>;

ee.on('syncSessionFailure', console.error);
ee.on('syncBookFailure', console.error);
ee.on('resyncFailure', console.error);