<?php require_once(dirname(__FILE__) .'./pencil/wp-load.php') ?>
<!DOCTYPE html>
<html lang="ja">
  <header>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:title" content="page.title">
    <meta name="twitter:card" content="">
    <style src="css/style.css"></style>
    <script src="js/javascript.css"></script>
    <title>pugtest</title>
  </header>
  <body>
<?php get_header(); ?>
    <main class="main">
      <h2 id="ll" class="main-ttl">タイトル
      </h2>
        <section>
          <h3>section-title</h3>
          <?php global $post;
  $args = array(
    'post_type' => 'page',
    'post__in' => array( 6, 8, 10 ),
  );
 $my_query = new WP_Query( $args );
?>
<?php if ( $my_query->have_posts() ): ?>
  <?php while ( $my_query->have_posts() ) : $my_query->the_post(); ?>
<a href="<?php the_permalink(); ?>" class="contents--top--post__link">
        <div class="contents--top--postbox">
           <?php the_post_thumbnail('thumbnail', array('class' => 'contents--top--postbox__img') ); ?>
           <div class="contents--top--post-inner">
             <h3 class="contents--top--post-tit"><?php the_title(); ?></h3>
             <p class="contents--top--post-txt">
              <?php echo mb_substr(get_the_excerpt(),0,30);
              $title= mb_substr($post->post_title,0,40); ?></p>
           </div>
          </div>
</a>
  <?php endwhile; ?>
<?php else: ?>
  <p>新しい記事はありません</p>
<?php endif; ?>
<?php wp_reset_postdata(); ?>
        </section>
    </main>
<?php get_footer(); ?>
  </body>
</html>