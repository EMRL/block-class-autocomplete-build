<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInit664e9eb8dd7da14fa4db202e118cdb93
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInit664e9eb8dd7da14fa4db202e118cdb93', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInit664e9eb8dd7da14fa4db202e118cdb93', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInit664e9eb8dd7da14fa4db202e118cdb93::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
