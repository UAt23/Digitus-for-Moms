export interface FeedModel {
   user_id: string;
   user_name: string;
   user_image_url: string;
   user_type: string;
   post_id: string;
   post_likes: number;
   post_shared: number;
   post_read_duration: number;
   post_views: number;
   post_number_of_comments: number;
   post_content: string;
   post_tags: string;
   post_comments: string;
   post_liked: boolean;
   post_type: number;
   post_image_url: string;
}