<?php
add_action('admin_menu', 'disableauthors_add_admin_menu');
add_action('admin_init', 'disableauthors_settings_init');

function disableauthors_add_admin_menu() {
	add_options_page('Disable Authors', 'Disable Authors', 'manage_options', 'disable_authors', 'disableauthors_options_page');
}


function disableauthors_settings_init(  ) {
	register_setting('disableauthors', 'disableauthors_default_name', array( 'default' => 'Anonymous' ));
	register_setting('disableauthors', 'disableauthors_disable_feed', array( 'default' => true ));
	register_setting('disableauthors', 'disableauthors_disable_author_pages', array( 'default' => true ));

	add_settings_section(
		'disableauthors_pluginPage_settings_section',
		__('Settings', 'disableauthors'),
		'__return_empty_string',
		'disableauthors'
	);

	add_settings_field(
		'default-name',
		__('Default Author Name', 'disableauthors'),
		'disableauthors_field_default_name_render',
		'disableauthors',
		'disableauthors_pluginPage_settings_section'
	);
	add_settings_field(
		'disable-feed',
		__('Disable Feed', 'disableauthors'),
		'disableauthors_field_disable_feed_render',
		'disableauthors',
		'disableauthors_pluginPage_settings_section'
	);
	add_settings_field(
		'disable-author-pages',
		__('Disable Author Pages', 'disableauthors'),
		'disableauthors_field_default_disable_author_pages',
		'disableauthors',
		'disableauthors_pluginPage_settings_section'
	);
}


function disableauthors_field_default_name_render() {
	$option = get_option('disableauthors_default_name', 'Anonymous');
	?>
	<input type="text" name='disableauthors_default_name' value="<?php echo esc_attr($option); ?>" />
	<?php
}

function disableauthors_field_disable_feed_render() {
	$option = get_option('disableauthors_disable_feed', 'on');
  $checked = $option === 'on';
	?>
	<label><input type="checkbox" name='disableauthors_disable_feed' <?php checked($checked); ?> /> <?php _e('Disable feeds', 'disableauthors'); ?></label>
	<p><?php _e('This will attempt to disable any rss feed Wordpress may generate. Note: Some plugins might modify or output their own feed.', 'disableauthors'); ?></p>
	<?php
}

function disableauthors_field_default_disable_author_pages() {
	$option = get_option('disableauthors_disable_author_pages', 'on');
  $checked = $option === 'on';
	?>
	<label><input type="checkbox" name='disableauthors_disable_author_pages' <?php checked($checked); ?> /> <?php _e('Disable author pages', 'disableauthors'); ?></label>
	<p><?php _e('Disables access to the standard author archive pages', 'disableauthors'); ?></p>
	<?php
}

function disableauthors_options_page() {
	?>
	<form action='options.php' method='post'>
		<h1><?php esc_html_e('Disable Authors', 'disableauthors'); ?></h1>

		<?php
		settings_fields('disableauthors');
		do_settings_sections('disableauthors');
		submit_button();
		?>

	</form>
	<?php
}
