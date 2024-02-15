import Image from "next/image";
import { EventListItem } from "./EventListItem";
import ListCard from "./ListCard";
import { api } from "@/trpc/server";
import { type AddToCalendarButtonPropsRestricted } from "@/types";

export default async function SampleEvent({ eventId }: { eventId: string }) {
  const event = await api.event.get.query({
    eventId,
  });

  const eventData = event?.event as AddToCalendarButtonPropsRestricted;
  const fullImageUrl = eventData?.images?.[3];
  const eventDataNoImage = event?.event as AddToCalendarButtonPropsRestricted;
  eventDataNoImage.images = undefined;

  if (!event || !eventData) {
    return null;
  }

  return (
    <div className="flex flex-row gap-8 lg:flex-row">
      <div className="hidden flex-col items-center lg:flex">
        <div className="relative size-24 overflow-hidden rounded-xl border-[6px] border-accent-yellow lg:size-44">
          <Image src={fullImageUrl!} fill alt="" className="object-cover" />
        </div>
        <div className="ml-6 rotate-[270deg] -scale-x-100 lg:ml-0 lg:rotate-0 lg:scale-100">
          <SparkleArrow />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <ListCard
          name={"All Events"}
          username={event.user.username}
          className="w-full"
        />
        <div className="pt-6 lg:hidden"></div>
        <div className="flex items-center lg:hidden">
          <div className="relative size-24 overflow-hidden rounded-xl border-[6px] border-accent-yellow lg:size-44">
            <Image src={fullImageUrl!} fill alt="" className="object-cover" />
          </div>
          <div className="ml-6 rotate-[270deg] -scale-x-100">
            <SparkleArrow />
          </div>
        </div>
        <div className="pt-6"></div>
        <EventListItem
          user={event.user}
          eventFollows={event.eventFollows}
          comments={event.comments}
          key={event.id}
          id={event.id}
          event={eventDataNoImage}
          createdAt={event.createdAt}
          visibility={event.visibility}
        />
      </div>
    </div>
  );
}

function SparkleArrow() {
  return (
    <svg
      width="101"
      height="146"
      viewBox="0 0 101 146"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.56"
        d="M100.061 135.061C100.646 134.475 100.646 133.525 100.061 132.939L90.5147 123.393C89.9289 122.808 88.9792 122.808 88.3934 123.393C87.8076 123.979 87.8076 124.929 88.3934 125.515L96.8787 134L88.3934 142.485C87.8076 143.071 87.8076 144.021 88.3934 144.607C88.9792 145.192 89.9289 145.192 90.5147 144.607L100.061 135.061ZM45.5 0.983333C45.5 1.81176 46.1716 2.48333 47 2.48333C47.8284 2.48333 48.5 1.81176 48.5 0.983333H45.5ZM48.5 8.85C48.5 8.02157 47.8284 7.35 47 7.35C46.1716 7.35 45.5 8.02157 45.5 8.85H48.5ZM45.5 10.8167C45.5 11.6451 46.1716 12.3167 47 12.3167C47.8284 12.3167 48.5 11.6451 48.5 10.8167H45.5ZM48.5 18.6833C48.5 17.8549 47.8284 17.1833 47 17.1833C46.1716 17.1833 45.5 17.8549 45.5 18.6833H48.5ZM45.5 20.65C45.5 21.4784 46.1716 22.15 47 22.15C47.8284 22.15 48.5 21.4784 48.5 20.65H45.5ZM48.5 28.5167C48.5 27.6882 47.8284 27.0167 47 27.0167C46.1716 27.0167 45.5 27.6882 45.5 28.5167H48.5ZM45.5 30.4833C45.5 31.3118 46.1716 31.9833 47 31.9833C47.8284 31.9833 48.5 31.3118 48.5 30.4833H45.5ZM48.5 38.35C48.5 37.5216 47.8284 36.85 47 36.85C46.1716 36.85 45.5 37.5216 45.5 38.35H48.5ZM45.5 40.3167C45.5 41.1451 46.1716 41.8167 47 41.8167C47.8284 41.8167 48.5 41.1451 48.5 40.3167H45.5ZM48.5 48.1833C48.5 47.3549 47.8284 46.6833 47 46.6833C46.1716 46.6833 45.5 47.3549 45.5 48.1833H48.5ZM45.5 50.15C45.5 50.9784 46.1716 51.65 47 51.65C47.8284 51.65 48.5 50.9784 48.5 50.15H45.5ZM48.5 58.0167C48.5 57.1882 47.8284 56.5167 47 56.5167C46.1716 56.5167 45.5 57.1882 45.5 58.0167H48.5ZM45.5 59.9833C45.5 60.8118 46.1716 61.4833 47 61.4833C47.8284 61.4833 48.5 60.8118 48.5 59.9833H45.5ZM48.5 67.85C48.5 67.0216 47.8284 66.35 47 66.35C46.1716 66.35 45.5 67.0216 45.5 67.85H48.5ZM45.5 69.8167C45.5 70.6451 46.1716 71.3167 47 71.3167C47.8284 71.3167 48.5 70.6451 48.5 69.8167H45.5ZM48.5 77.6833C48.5 76.8549 47.8284 76.1833 47 76.1833C46.1716 76.1833 45.5 76.8549 45.5 77.6833H48.5ZM45.5 79.65C45.5 80.4784 46.1716 81.15 47 81.15C47.8284 81.15 48.5 80.4784 48.5 79.65H45.5ZM48.5 87.5167C48.5 86.6882 47.8284 86.0167 47 86.0167C46.1716 86.0167 45.5 86.6882 45.5 87.5167H48.5ZM45.5 89.4833C45.5 90.3118 46.1716 90.9833 47 90.9833C47.8284 90.9833 48.5 90.3118 48.5 89.4833H45.5ZM48.5 97.35C48.5 96.5216 47.8284 95.85 47 95.85C46.1716 95.85 45.5 96.5216 45.5 97.35H48.5ZM45.5 99.3167C45.5 100.145 46.1716 100.817 47 100.817C47.8284 100.817 48.5 100.145 48.5 99.3167H45.5ZM48.5 107.183C48.5 106.355 47.8284 105.683 47 105.683C46.1716 105.683 45.5 106.355 45.5 107.183H48.5ZM45.5 109.15C45.5 109.978 46.1716 110.65 47 110.65C47.8284 110.65 48.5 109.978 48.5 109.15H45.5ZM48.5 117.017C48.5 116.188 47.8284 115.517 47 115.517C46.1716 115.517 45.5 116.188 45.5 117.017H48.5ZM45.5235 118.915C45.5662 119.742 46.2715 120.378 47.0988 120.336C47.9261 120.293 48.5622 119.588 48.5196 118.76L45.5235 118.915ZM50.0768 124.583C49.7001 123.846 48.7966 123.553 48.0588 123.929C47.321 124.306 47.0282 125.21 47.4049 125.947L50.0768 124.583ZM48.3224 127.533C48.7742 128.228 49.7034 128.424 50.3978 127.972C51.0921 127.521 51.2887 126.591 50.8369 125.897L48.3224 127.533ZM55.103 130.163C54.4086 129.711 53.4795 129.908 53.0276 130.602C52.5758 131.297 52.7724 132.226 53.4667 132.678L55.103 130.163ZM55.0525 133.595C55.7903 133.972 56.6938 133.679 57.0705 132.941C57.4472 132.203 57.1545 131.3 56.4166 130.923L55.0525 133.595ZM62.2397 132.48C61.4123 132.438 60.7071 133.074 60.6644 133.901C60.6217 134.729 61.2578 135.434 62.0852 135.476L62.2397 132.48ZM63.9 135.5C64.7284 135.5 65.4 134.828 65.4 134C65.4 133.172 64.7284 132.5 63.9 132.5V135.5ZM71.1 132.5C70.2716 132.5 69.6 133.172 69.6 134C69.6 134.828 70.2716 135.5 71.1 135.5V132.5ZM72.9 135.5C73.7284 135.5 74.4 134.828 74.4 134C74.4 133.172 73.7284 132.5 72.9 132.5V135.5ZM80.1 132.5C79.2716 132.5 78.6 133.172 78.6 134C78.6 134.828 79.2716 135.5 80.1 135.5V132.5ZM81.9 135.5C82.7284 135.5 83.4 134.828 83.4 134C83.4 133.172 82.7284 132.5 81.9 132.5V135.5ZM89.1 132.5C88.2716 132.5 87.6 133.172 87.6 134C87.6 134.828 88.2716 135.5 89.1 135.5V132.5ZM90.9 135.5C91.7284 135.5 92.4 134.828 92.4 134C92.4 133.172 91.7284 132.5 90.9 132.5V135.5ZM98.1 132.5C97.2716 132.5 96.6 133.172 96.6 134C96.6 134.828 97.2716 135.5 98.1 135.5V132.5ZM45.5 0V0.983333H48.5V0H45.5ZM45.5 8.85V10.8167H48.5V8.85H45.5ZM45.5 18.6833V20.65H48.5V18.6833H45.5ZM45.5 28.5167V30.4833H48.5V28.5167H45.5ZM45.5 38.35V40.3167H48.5V38.35H45.5ZM45.5 48.1833V50.15H48.5V48.1833H45.5ZM45.5 58.0167V59.9833H48.5V58.0167H45.5ZM45.5 67.85V69.8167H48.5V67.85H45.5ZM45.5 77.6833V79.65H48.5V77.6833H45.5ZM45.5 87.5167V89.4833H48.5V87.5167H45.5ZM45.5 97.35V99.3167H48.5V97.35H45.5ZM45.5 107.183V109.15H48.5V107.183H45.5ZM45.5 117.017V118H48.5V117.017H45.5ZM45.5 118C45.5 118.307 45.5079 118.612 45.5235 118.915L48.5196 118.76C48.5066 118.509 48.5 118.255 48.5 118H45.5ZM47.4049 125.947C47.6836 126.493 47.9901 127.023 48.3224 127.533L50.8369 125.897C50.5615 125.474 50.3076 125.035 50.0768 124.583L47.4049 125.947ZM53.4667 132.678C53.9774 133.01 54.5066 133.316 55.0525 133.595L56.4166 130.923C55.9646 130.692 55.5262 130.439 55.103 130.163L53.4667 132.678ZM62.0852 135.476C62.3883 135.492 62.6933 135.5 63 135.5V132.5C62.7448 132.5 62.4913 132.493 62.2397 132.48L62.0852 135.476ZM63 135.5H63.9V132.5H63V135.5ZM71.1 135.5H72.9V132.5H71.1V135.5ZM80.1 135.5H81.9V132.5H80.1V135.5ZM89.1 135.5H90.9V132.5H89.1V135.5ZM98.1 135.5H99V132.5H98.1V135.5Z"
        fill="#5A32FB"
      />
      <rect x="23" y="40" width="52" height="52" rx="26" fill="#E0D9FF" />
      <path
        d="M49 52.5L46.132 61.2195C45.9852 61.6658 45.7357 62.0713 45.4035 62.4035C45.0713 62.7357 44.6658 62.9852 44.2195 63.132L35.5 66L44.2195 68.868C44.6658 69.0148 45.0713 69.2643 45.4035 69.5965C45.7357 69.9287 45.9852 70.3342 46.132 70.7805L49 79.5L51.868 70.7805C52.0148 70.3342 52.2643 69.9287 52.5965 69.5965C52.9287 69.2643 53.3342 69.0148 53.7805 68.868L62.5 66L53.7805 63.132C53.3342 62.9852 52.9287 62.7357 52.5965 62.4035C52.2643 62.0713 52.0148 61.6658 51.868 61.2195L49 52.5Z"
        stroke="#5A32FB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.5 52.5V58.5"
        stroke="#5A32FB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M59.5 73.5V79.5"
        stroke="#5A32FB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35.5 55.5H41.5"
        stroke="#5A32FB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M56.5 76.5H62.5"
        stroke="#5A32FB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
