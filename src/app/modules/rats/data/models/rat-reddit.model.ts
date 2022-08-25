import Rat from '../../domain/entities/rat.entity';

export interface RatJsonModelConstructorArgs {
    title: string;
    imagesURLS: string[];
};

export default class RatRedditJsonModel implements Rat {
    title: string;
    imagesURLS: string[];

    constructor(args: RatJsonModelConstructorArgs) {
        this.title = args.title;
        this.imagesURLS = args.imagesURLS;
    }

    static fromJsonList(json: any[]): RatRedditJsonModel[] {
        return json
            .filter((rat: any) => {
                return (
                    !rat.data.is_video &&
                    rat.data.url_overridden_by_dest !== undefined &&
                    !rat.data.url_overridden_by_dest.includes('reddit.com/gallery')
                );  
            })
            .map((rat: any) => {
                return new RatRedditJsonModel({
                    title: rat.data.title,
                    imagesURLS: [rat.data.url_overridden_by_dest]
                });
            });
    }
}