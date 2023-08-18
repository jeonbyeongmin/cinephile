import { Flex } from '@/components/base';
import { Author } from '@/types/threads';
import Image from 'next/image';

interface Props {
  author: Author;
  content: string;
}

export function ThreadRepReply({ author, content }: Props) {
  return (
    <Flex direction="row" gap={3} className="bg-gray-800 hover:bg-gray-700 p-4 w-full rounded-md">
      <div className="rounded-full overflow-hidden">
        <Image src={author.avatar} width={30} height={30} alt="thread movie poster" />
      </div>
      <p className="flex-1 line-clamp-2 text-sm">{content}</p>
    </Flex>
  );
}
