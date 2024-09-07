import Image from 'next/image';
import style from './ContentComponent.module.css';
import classNames from 'classnames';
import Typography from '@app/shared-components/Typography/Typography';
import WixMediaImage from '@app/shared-components/WixMediaImage/WixMediaImage';
import Tag from '@app/shared-components/Tag/Tag';

export type ContentComponentProps = {
  contentText: string[];
  contentImages: string[];
};

const ContentComponent: React.FC<ContentComponentProps> = ({
  contentText,
  contentImages,
}) => {
  console.log('contentText', contentText);
  const arrayToIterate =
    contentText?.length > contentImages?.length ? contentText : contentImages;
  return (
    <main className={style.postContent}>
      {arrayToIterate?.length ? (
        arrayToIterate.map(
          (item, index) =>
            item && (
              <section key={`contentItem-${index}`} className="w-full">
                {contentText?.[index] && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: contentText?.[index],
                    }}
                    className="py-4"
                  ></div>
                )}
                {contentImages?.[index] && (
                  <WixMediaImage
                    media={contentImages[index]}
                    // disableZoom
                    height={400}
                    width={600}
                    className={classNames('rounded-md block mx-auto')}
                    alt="Post Image"
                  />
                )}
              </section>
            )
        )
      ) : (
        <p>
          The following recently published and upcoming reports and books shed
          light on future-oriented insights with a special focus on Portugal.
          These materials explore a range of topics, from economic development
          and technological innovation to environmental sustainability and
          social trends specific to the region. By delving into these resources,
          readers can gain a comprehensive understanding of the challenges and
          opportunities that Portugal may face in the coming years. <br />
          <br />
          <Image
            src="https://picsum.photos/id/155/600/400"
            width={600}
            height={400}
            className={classNames('rounded-md block mx-auto')}
            alt="Post Image"
          />
          <br />
          (Portuguese version only) This book was published by Orient Foundation
          (co-edited by the Institute for Prospective Studies) and launched in
          Lisbon on the 4th April 2024. It includes essays and reflections that
          have resulted from the annual Foresight Meetings of Arrábida, held
          since 1992 and which aim to analyze their impact on development. It is
          organized in four parts, debating and clarifying the conditions for
          the development of the Portuguese society (and European societies) as
          a knowledge-based society and economy, and with the direct involvement
          of the most relevant actors: Introductory Essays, Policies –
          Production, dissemination and transmission of knowledge, Reflections –
          the conditions and the dynamics of social and economic appropriation
          of knowledge, Future Challenges – The prospective and Portugal’s
          position in the world.(2024, RePLAN multisectoral team) (Portuguese
          version only) This digital brochure, recently published on March 2024,
          is a publication by the Planning and Foresight Services Network of the
          Public Administration (PlanAPP), as part of the activities carried out
          by the Multisectoral Foresight Team of the Portuguese Network of
          Public Administration Planning and Foresight Services (RePLAN). <br />
          <br />
          <Image
            src="https://placehold.co/600x400?text=placeholder"
            width={600}
            height={400}
            className={classNames('rounded-md block mx-auto')}
            alt="Post Image"
          />
          <span className="text-xs">Caption for image</span>
          <br />
          This brochure is a brief introduction to the 2050 Megatrends Report
          for Portugal, to be published by the end of 2024. Both publications
          are coordinated by the Planning and Foresight Services Network of the
          Public Administration (PlanAPP), as part of the activities carried out
          by the Multisectoral Foresight Team of the Portuguese Network of
          Public Administration Planning and Foresight Services (RePLAN). The
          brochure presents, in a very brief and preliminary way, the nine
          global megatrends that are likely to shape the future of Portugal,
          with a general description and a list of the most relevant potential
          impacts: Worsening climate change; Growing pressure on natural
          resources; Diversifying and changing economic models; Diverging
          demographic trends; A more urban world; A more digital world;
          Accelerating technological development; A multipolar world and New
          challenges to democracy. The identification and description of
          megatrends for Portugal is a work in progress, based on a
          collaborative, systematic and open process. During 2024, with the aim
          of producing a report and supporting the formulation of public
          policies, this process will be deepened with workshops, expert
          consultation, and citizen participation. <br />
          <br />
          To support the discussion of the megatrends in a multisectorial
          approach, a series of workshops/webinars were planned: Workshop
          RePLAN: Megatrends for Portugal from the prospective of security and
          defense (26 – 27 March 2024) was organized by the Portuguese Institute
          of National Defense and included a discussion about all identified
          megatrends and its relation to the security and defense sectors.
          Workshop RePLAN: Megatrends with impact for Portugal from the
          prospective of Territory-Sea-Environment (10th may 2024) <br />
          <br />
          This workshop is being organized by the Directorate-General for Sea
          Policy and the General Secretariat for the Environment, in
          collaboration with PlanAPP, it is the second of a set of initiatives
          in a collaborative, systematic and open process that aims to encourage
          the presentation of ideas and debates able to support the formulation
          of public policies, within the scope of the attributions of the Public
          Administration Planning and Foresight Services Network (RePLAN), with
          the objective of producing a “Report on Megatrends with Impact on
          Portugal” by the end of this year.
        </p>
      )}
    </main>
  );
};

export default ContentComponent;
