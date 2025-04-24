import * as $protobuf from "protobufjs";
export namespace POGOProtos {

    namespace Data {

        interface IAssetDigestEntry {
            asset_id?: (string|null);
            bundle_name?: (string|null);
            version?: (number|Long|null);
            checksum?: (number|null);
            size?: (number|null);
            key?: (Uint8Array|null);
        }

        class AssetDigestEntry implements IAssetDigestEntry {
            constructor(properties?: POGOProtos.Data.IAssetDigestEntry);
            public asset_id: string;
            public bundle_name: string;
            public version: (number|Long);
            public checksum: number;
            public size: number;
            public key: Uint8Array;
            public static encode(message: POGOProtos.Data.IAssetDigestEntry, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.AssetDigestEntry;
            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Data.AssetDigestEntry;
            public static toObject(message: POGOProtos.Data.AssetDigestEntry, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
            public toJSON(): [ 'object' ].<string, any>;
        }

        namespace Battle {

            interface IBattleAction {
                Type?: (POGOProtos.Data.Battle.BattleActionType|null);
                action_start_ms?: (number|Long|null);
                duration_ms?: (number|null);
                energy_delta?: (number|null);
                attacker_index?: (number|null);
                target_index?: (number|null);
                active_pokemon_id?: (number|Long|null);
                player_joined?: (POGOProtos.Data.Battle.IBattleParticipant|null);
                battle_results?: (POGOProtos.Data.Battle.IBattleResults|null);
                damage_windows_start_timestamp_mss?: (number|Long|null);
                damage_windows_end_timestamp_mss?: (number|Long|null);
                player_left?: (POGOProtos.Data.Battle.IBattleParticipant|null);
                target_pokemon_id?: (number|Long|null);
            }

            class BattleAction implements IBattleAction {
                constructor(properties?: POGOProtos.Data.Battle.IBattleAction);
                public Type: POGOProtos.Data.Battle.BattleActionType;
                public action_start_ms: (number|Long);
                public duration_ms: number;
                public energy_delta: number;
                public attacker_index: number;
                public target_index: number;
                public active_pokemon_id: (number|Long);
                public player_joined?: (POGOProtos.Data.Battle.IBattleParticipant|null);
                public battle_results?: (POGOProtos.Data.Battle.IBattleResults|null);
                public damage_windows_start_timestamp_mss: (number|Long);
                public damage_windows_end_timestamp_mss: (number|Long);
                public player_left?: (POGOProtos.Data.Battle.IBattleParticipant|null);
                public target_pokemon_id: (number|Long);
                public static encode(message: POGOProtos.Data.Battle.IBattleAction, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Battle.BattleAction;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Data.Battle.BattleAction;
                public static toObject(message: POGOProtos.Data.Battle.BattleAction, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            enum BattleActionType {
                ACTION_UNSET = 0,
                ACTION_ATTACK = 1,
                ACTION_DODGE = 2,
                ACTION_SPECIAL_ATTACK = 3,
                ACTION_SWAP_POKEMON = 4,
                ACTION_FAINT = 5,
                ACTION_PLAYER_JOIN = 6,
                ACTION_PLAYER_QUIT = 7,
                ACTION_VICTORY = 8,
                ACTION_DEFEAT = 9,
                ACTION_TIMED_OUT = 10
            }

            interface IBattleLog {
                state?: (POGOProtos.Data.Battle.BattleState|null);
                battle_type?: (POGOProtos.Data.Battle.BattleType|null);
                server_ms?: (number|Long|null);
                battle_actions?: (POGOProtos.Data.Battle.IBattleAction[]|null);
                battle_start_timestamp_ms?: (number|Long|null);
                battle_end_timestamp_ms?: (number|Long|null);
            }

            class BattleLog implements IBattleLog {
                constructor(properties?: POGOProtos.Data.Battle.IBattleLog);
                public state: POGOProtos.Data.Battle.BattleState;
                public battle_type: POGOProtos.Data.Battle.BattleType;
                public server_ms: (number|Long);
                public battle_actions: [ 'Array' ].<POGOProtos.Data.Battle.IBattleAction>;
                public battle_start_timestamp_ms: (number|Long);
                public battle_end_timestamp_ms: (number|Long);
                public static encode(message: POGOProtos.Data.Battle.IBattleLog, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Battle.BattleLog;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Data.Battle.BattleLog;
                public static toObject(message: POGOProtos.Data.Battle.BattleLog, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IBattleParticipant {
                active_pokemon?: (POGOProtos.Data.Battle.IBattlePokemonInfo|null);
                trainer_public_profile?: (POGOProtos.Data.Player.IPlayerPublicProfile|null);
                reverse_pokemon?: (POGOProtos.Data.Battle.IBattlePokemonInfo[]|null);
                defeated_pokemon?: (POGOProtos.Data.Battle.IBattlePokemonInfo[]|null);
            }

            class BattleParticipant implements IBattleParticipant {
                constructor(properties?: POGOProtos.Data.Battle.IBattleParticipant);
                public active_pokemon?: (POGOProtos.Data.Battle.IBattlePokemonInfo|null);
                public trainer_public_profile?: (POGOProtos.Data.Player.IPlayerPublicProfile|null);
                public reverse_pokemon: [ 'Array' ].<POGOProtos.Data.Battle.IBattlePokemonInfo>;
                public defeated_pokemon: [ 'Array' ].<POGOProtos.Data.Battle.IBattlePokemonInfo>;
                public static encode(message: POGOProtos.Data.Battle.IBattleParticipant, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Battle.BattleParticipant;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Data.Battle.BattleParticipant;
                public static toObject(message: POGOProtos.Data.Battle.BattleParticipant, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IBattlePokemonInfo {
                pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                current_health?: (number|null);
                current_energy?: (number|null);
            }

            class BattlePokemonInfo implements IBattlePokemonInfo {
                constructor(properties?: POGOProtos.Data.Battle.IBattlePokemonInfo);
                public pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                public current_health: number;
                public current_energy: number;
                public static encode(message: POGOProtos.Data.Battle.IBattlePokemonInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Battle.BattlePokemonInfo;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Data.Battle.BattlePokemonInfo;
                public static toObject(message: POGOProtos.Data.Battle.BattlePokemonInfo, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IBattleResults {
                gym_state?: (POGOProtos.Data.Gym.IGymState|null);
                attackers?: (POGOProtos.Data.Battle.IBattleParticipant[]|null);
                player_experience_awarded?: (number[]|null);
                next_defender_pokemon_id?: (number|Long|null);
                gym_points_delta?: (number|null);
            }

            class BattleResults implements IBattleResults {
                constructor(properties?: POGOProtos.Data.Battle.IBattleResults);
                public gym_state?: (POGOProtos.Data.Gym.IGymState|null);
                public attackers: [ 'Array' ].<POGOProtos.Data.Battle.IBattleParticipant>;
                public player_experience_awarded: [ 'Array' ].<number>;
                public next_defender_pokemon_id: (number|Long);
                public gym_points_delta: number;
                public static encode(message: POGOProtos.Data.Battle.IBattleResults, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Battle.BattleResults;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Data.Battle.BattleResults;
                public static toObject(message: POGOProtos.Data.Battle.BattleResults, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            enum BattleState {
                STATE_UNSET = 0,
                ACTIVE = 1,
                VICTORY = 2,
                DEFEATED = 3,
                TIMED_OUT = 4
            }

            enum BattleType {
                BATTLE_TYPE_UNSET = 0,
                NORMAL = 1,
                TRAINING = 2
            }
        }

        namespace Capture {

            interface ICaptureAward {
                activity_type?: (POGOProtos.Enums.ActivityType[]|null);
                xp?: (number[]|null);
                candy?: (number[]|null);
                stardust?: (number[]|null);
            }

            class CaptureAward implements ICaptureAward {
                constructor(properties?: POGOProtos.Data.Capture.ICaptureAward);
                public activity_type: [ 'Array' ].<POGOProtos.Enums.ActivityType>;
                public xp: [ 'Array' ].<number>;
                public candy: [ 'Array' ].<number>;
                public stardust: [ 'Array' ].<number>;
                public static encode(message: POGOProtos.Data.Capture.ICaptureAward, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Capture.CaptureAward;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Data.Capture.CaptureAward;
                public static toObject(message: POGOProtos.Data.Capture.CaptureAward, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface ICaptureProbability {
                pokeball_type?: (POGOProtos.Inventory.ItemId[]|null);
                capture_probability?: (number[]|null);
                reticle_difficulty_scale?: (number|null);
            }

            class CaptureProbability implements ICaptureProbability {
                constructor(properties?: POGOProtos.Data.Capture.ICaptureProbability);
                public pokeball_type: [ 'Array' ].<POGOProtos.Inventory.ItemId>;
                public capture_probability: [ 'Array' ].<number>;
                public reticle_difficulty_scale: number;
                public static encode(message: POGOProtos.Data.Capture.ICaptureProbability, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Capture.CaptureProbability;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Data.Capture.CaptureProbability;
                public static toObject(message: POGOProtos.Data.Capture.CaptureProbability, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }
        }

        interface IDownloadUrlEntry {
            asset_id?: (string|null);
            url?: (string|null);
            size?: (number|null);
            checksum?: (number|null);
        }

        class DownloadUrlEntry implements IDownloadUrlEntry {
            constructor(properties?: POGOProtos.Data.IDownloadUrlEntry);
            public asset_id: string;
            public url: string;
            public size: number;
            public checksum: number;
            public static encode(message: POGOProtos.Data.IDownloadUrlEntry, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.DownloadUrlEntry;
            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Data.DownloadUrlEntry;
            public static toObject(message: POGOProtos.Data.DownloadUrlEntry, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
            public toJSON(): [ 'object' ].<string, any>;
        }

        namespace Gym {

            interface IGymMembership {
                pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                trainer_public_profile?: (POGOProtos.Data.Player.IPlayerPublicProfile|null);
            }

            class GymMembership implements IGymMembership {
                constructor(properties?: POGOProtos.Data.Gym.IGymMembership);
                public pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                public trainer_public_profile?: (POGOProtos.Data.Player.IPlayerPublicProfile|null);
                public static encode(message: POGOProtos.Data.Gym.IGymMembership, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Gym.GymMembership;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Data.Gym.GymMembership;
                public static toObject(message: POGOProtos.Data.Gym.GymMembership, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IGymState {
                fort_data?: (POGOProtos.Map.Fort.IFortData|null);
                memberships?: (POGOProtos.Data.Gym.IGymMembership[]|null);
            }

            class GymState implements IGymState {
                constructor(properties?: POGOProtos.Data.Gym.IGymState);
                public fort_data?: (POGOProtos.Map.Fort.IFortData|null);
                public memberships: [ 'Array' ].<POGOProtos.Data.Gym.IGymMembership>;
                public static encode(message: POGOProtos.Data.Gym.IGymState, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Gym.GymState;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Data.Gym.GymState;
                public static toObject(message: POGOProtos.Data.Gym.GymState, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }
        }

        namespace Player {

            interface IContactSettings {
                send_marketing_emails?: (boolean|null);
                send_push_notifications?: (boolean|null);
            }

            class ContactSettings implements IContactSettings {
                constructor(properties?: POGOProtos.Data.Player.IContactSettings);
                public send_marketing_emails: boolean;
                public send_push_notifications: boolean;
                public static encode(message: POGOProtos.Data.Player.IContactSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Player.ContactSettings;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Data.Player.ContactSettings;
                public static toObject(message: POGOProtos.Data.Player.ContactSettings, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface ICurrency {
                name?: (string|null);
                amount?: (number|null);
            }

            class Currency implements ICurrency {
                constructor(properties?: POGOProtos.Data.Player.ICurrency);
                public name: string;
                public amount: number;
                public static encode(message: POGOProtos.Data.Player.ICurrency, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Player.Currency;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Data.Player.Currency;
                public static toObject(message: POGOProtos.Data.Player.Currency, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IDailyBonus {
                next_collected_timestamp_ms?: (number|Long|null);
                next_defender_bonus_collect_timestamp_ms?: (number|Long|null);
            }

            class DailyBonus implements IDailyBonus {
                constructor(properties?: POGOProtos.Data.Player.IDailyBonus);
                public next_collected_timestamp_ms: (number|Long);
                public next_defender_bonus_collect_timestamp_ms: (number|Long);
                public static encode(message: POGOProtos.Data.Player.IDailyBonus, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Player.DailyBonus;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Data.Player.DailyBonus;
                public static toObject(message: POGOProtos.Data.Player.DailyBonus, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IEquippedBadge {
                badge_type?: (POGOProtos.Enums.BadgeType|null);
                level?: (number|null);
                next_equip_change_allowed_timestamp_ms?: (number|Long|null);
            }

            class EquippedBadge implements IEquippedBadge {
                constructor(properties?: POGOProtos.Data.Player.IEquippedBadge);
                public badge_type: POGOProtos.Enums.BadgeType;
                public level: number;
                public next_equip_change_allowed_timestamp_ms: (number|Long);
                public static encode(message: POGOProtos.Data.Player.IEquippedBadge, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Player.EquippedBadge;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Data.Player.EquippedBadge;
                public static toObject(message: POGOProtos.Data.Player.EquippedBadge, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IPlayerAvatar {
                skin?: (number|null);
                hair?: (number|null);
                shirt?: (number|null);
                pants?: (number|null);
                hat?: (number|null);
                shoes?: (number|null);
                gender?: (POGOProtos.Enums.Gender|null);
                eyes?: (number|null);
                backpack?: (number|null);
            }

            class PlayerAvatar implements IPlayerAvatar {
                constructor(properties?: POGOProtos.Data.Player.IPlayerAvatar);
                public skin: number;
                public hair: number;
                public shirt: number;
                public pants: number;
                public hat: number;
                public shoes: number;
                public gender: POGOProtos.Enums.Gender;
                public eyes: number;
                public backpack: number;
                public static encode(message: POGOProtos.Data.Player.IPlayerAvatar, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Player.PlayerAvatar;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Data.Player.PlayerAvatar;
                public static toObject(message: POGOProtos.Data.Player.PlayerAvatar, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IPlayerCamera {
                is_default_camera?: (boolean|null);
            }

            class PlayerCamera implements IPlayerCamera {
                constructor(properties?: POGOProtos.Data.Player.IPlayerCamera);
                public is_default_camera: boolean;
                public static encode(message: POGOProtos.Data.Player.IPlayerCamera, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Player.PlayerCamera;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Data.Player.PlayerCamera;
                public static toObject(message: POGOProtos.Data.Player.PlayerCamera, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IPlayerCurrency {
                gems?: (number|null);
            }

            class PlayerCurrency implements IPlayerCurrency {
                constructor(properties?: POGOProtos.Data.Player.IPlayerCurrency);
                public gems: number;
                public static encode(message: POGOProtos.Data.Player.IPlayerCurrency, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Player.PlayerCurrency;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Data.Player.PlayerCurrency;
                public static toObject(message: POGOProtos.Data.Player.PlayerCurrency, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IPlayerPublicProfile {
                name?: (string|null);
                level?: (number|null);
                avatar?: (POGOProtos.Data.Player.IPlayerAvatar|null);
            }

            class PlayerPublicProfile implements IPlayerPublicProfile {
                constructor(properties?: POGOProtos.Data.Player.IPlayerPublicProfile);
                public name: string;
                public level: number;
                public avatar?: (POGOProtos.Data.Player.IPlayerAvatar|null);
                public static encode(message: POGOProtos.Data.Player.IPlayerPublicProfile, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Player.PlayerPublicProfile;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Data.Player.PlayerPublicProfile;
                public static toObject(message: POGOProtos.Data.Player.PlayerPublicProfile, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IPlayerStats {
                level?: (number|null);
                experience?: (number|Long|null);
                prev_level_xp?: (number|Long|null);
                next_level_xp?: (number|Long|null);
                km_walked?: (number|null);
                pokemons_encountered?: (number|null);
                unique_pokedex_entries?: (number|null);
                pokemons_captured?: (number|null);
                evolutions?: (number|null);
                poke_stop_visits?: (number|null);
                pokeballs_thrown?: (number|null);
                eggs_hatched?: (number|null);
                big_magikarp_caught?: (number|null);
                battle_attack_won?: (number|null);
                battle_attack_total?: (number|null);
                battle_defended_won?: (number|null);
                battle_training_won?: (number|null);
                battle_training_total?: (number|null);
                prestige_raised_total?: (number|null);
                prestige_dropped_total?: (number|null);
                pokemon_deployed?: (number|null);
                pokemon_caught_by_type?: (Uint8Array|null);
                small_rattata_caught?: (number|null);
            }

            class PlayerStats implements IPlayerStats {
                constructor(properties?: POGOProtos.Data.Player.IPlayerStats);
                public level: number;
                public experience: (number|Long);
                public prev_level_xp: (number|Long);
                public next_level_xp: (number|Long);
                public km_walked: number;
                public pokemons_encountered: number;
                public unique_pokedex_entries: number;
                public pokemons_captured: number;
                public evolutions: number;
                public poke_stop_visits: number;
                public pokeballs_thrown: number;
                public eggs_hatched: number;
                public big_magikarp_caught: number;
                public battle_attack_won: number;
                public battle_attack_total: number;
                public battle_defended_won: number;
                public battle_training_won: number;
                public battle_training_total: number;
                public prestige_raised_total: number;
                public prestige_dropped_total: number;
                public pokemon_deployed: number;
                public pokemon_caught_by_type: Uint8Array;
                public small_rattata_caught: number;
                public static encode(message: POGOProtos.Data.Player.IPlayerStats, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Player.PlayerStats;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Data.Player.PlayerStats;
                public static toObject(message: POGOProtos.Data.Player.PlayerStats, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }
        }

        interface IPlayerBadge {
            badge_type?: (POGOProtos.Enums.BadgeType|null);
            rank?: (number|null);
            start_value?: (number|null);
            end_value?: (number|null);
            current_value?: (number|null);
        }

        class PlayerBadge implements IPlayerBadge {
            constructor(properties?: POGOProtos.Data.IPlayerBadge);
            public badge_type: POGOProtos.Enums.BadgeType;
            public rank: number;
            public start_value: number;
            public end_value: number;
            public current_value: number;
            public static encode(message: POGOProtos.Data.IPlayerBadge, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.PlayerBadge;
            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Data.PlayerBadge;
            public static toObject(message: POGOProtos.Data.PlayerBadge, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
            public toJSON(): [ 'object' ].<string, any>;
        }

        interface IPlayerData {
            creation_timestamp_ms?: (number|Long|null);
            username?: (string|null);
            team?: (number|null);
            tutorial_state?: (number[]|null);
            avatar?: (POGOProtos.Data.Player.IPlayerAvatar|null);
            max_pokemon_storage?: (number|null);
            max_item_storage?: (number|null);
            daily_bonus?: (POGOProtos.Data.Player.IDailyBonus|null);
            equipped_badge?: (POGOProtos.Data.Player.IEquippedBadge|null);
            contact_settings?: (POGOProtos.Data.Player.IContactSettings|null);
            currencies?: (POGOProtos.Data.Player.ICurrency[]|null);
        }

        class PlayerData implements IPlayerData {
            constructor(properties?: POGOProtos.Data.IPlayerData);
            public creation_timestamp_ms: (number|Long);
            public username: string;
            public team: number;
            public tutorial_state: [ 'Array' ].<number>;
            public avatar?: (POGOProtos.Data.Player.IPlayerAvatar|null);
            public max_pokemon_storage: number;
            public max_item_storage: number;
            public daily_bonus?: (POGOProtos.Data.Player.IDailyBonus|null);
            public equipped_badge?: (POGOProtos.Data.Player.IEquippedBadge|null);
            public contact_settings?: (POGOProtos.Data.Player.IContactSettings|null);
            public currencies: [ 'Array' ].<POGOProtos.Data.Player.ICurrency>;
            public static encode(message: POGOProtos.Data.IPlayerData, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.PlayerData;
            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Data.PlayerData;
            public static toObject(message: POGOProtos.Data.PlayerData, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
            public toJSON(): [ 'object' ].<string, any>;
        }

        interface IPokedexEntry {
            pokedex_entry_number?: (number|null);
            times_encountered?: (number|null);
            times_captured?: (number|null);
            evolution_stone_pieces?: (number|null);
            evolution_stones?: (number|null);
        }

        class PokedexEntry implements IPokedexEntry {
            constructor(properties?: POGOProtos.Data.IPokedexEntry);
            public pokedex_entry_number: number;
            public times_encountered: number;
            public times_captured: number;
            public evolution_stone_pieces: number;
            public evolution_stones: number;
            public static encode(message: POGOProtos.Data.IPokedexEntry, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.PokedexEntry;
            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Data.PokedexEntry;
            public static toObject(message: POGOProtos.Data.PokedexEntry, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
            public toJSON(): [ 'object' ].<string, any>;
        }

        interface IPokemonData {
            id?: (number|Long|null);
            pokemon_id?: (POGOProtos.Enums.PokemonId|null);
            cp?: (number|null);
            stamina?: (number|null);
            stamina_max?: (number|null);
            move_1?: (POGOProtos.Enums.PokemonMove|null);
            move_2?: (POGOProtos.Enums.PokemonMove|null);
            deployed_fort_id?: (number|null);
            owner_name?: (string|null);
            is_egg?: (boolean|null);
            egg_km_walked_target?: (number|null);
            egg_km_walked_start?: (number|null);
            origin?: (number|null);
            height_m?: (number|null);
            weight_kg?: (number|null);
            individual_attack?: (number|null);
            individual_defense?: (number|null);
            individual_stamina?: (number|null);
            cp_multiplier?: (number|null);
            pokeball?: (number|null);
            captured_cell_id?: (number|Long|null);
            battles_attacked?: (number|null);
            battles_defended?: (number|null);
            egg_incubator_id?: (string|null);
            creation_time_ms?: (number|Long|null);
            num_upgrades?: (number|null);
            additional_cp_multiplier?: (number|null);
            favorite?: (number|null);
            nickname?: (string|null);
            from_fort?: (number|null);
        }

        class PokemonData implements IPokemonData {
            constructor(properties?: POGOProtos.Data.IPokemonData);
            public id: (number|Long);
            public pokemon_id: POGOProtos.Enums.PokemonId;
            public cp: number;
            public stamina: number;
            public stamina_max: number;
            public move_1: POGOProtos.Enums.PokemonMove;
            public move_2: POGOProtos.Enums.PokemonMove;
            public deployed_fort_id: number;
            public owner_name: string;
            public is_egg: boolean;
            public egg_km_walked_target: number;
            public egg_km_walked_start: number;
            public origin: number;
            public height_m: number;
            public weight_kg: number;
            public individual_attack: number;
            public individual_defense: number;
            public individual_stamina: number;
            public cp_multiplier: number;
            public pokeball: number;
            public captured_cell_id: (number|Long);
            public battles_attacked: number;
            public battles_defended: number;
            public egg_incubator_id: string;
            public creation_time_ms: (number|Long);
            public num_upgrades: number;
            public additional_cp_multiplier: number;
            public favorite: number;
            public nickname: string;
            public from_fort: number;
            public static encode(message: POGOProtos.Data.IPokemonData, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.PokemonData;
            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Data.PokemonData;
            public static toObject(message: POGOProtos.Data.PokemonData, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
            public toJSON(): [ 'object' ].<string, any>;
        }
    }

    namespace Enums {

        enum ActivityType {
            ACTIVITY_UNKNOWN = 0,
            ACTIVITY_CATCH_POKEMON = 1,
            ACTIVITY_CATCH_LEGEND_POKEMON = 2,
            ACTIVITY_FLEE_POKEMON = 3,
            ACTIVITY_DEFEAT_FORT = 4,
            ACTIVITY_EVOLVE_POKEMON = 5,
            ACTIVITY_HATCH_EGG = 6,
            ACTIVITY_WALK_KM = 7,
            ACTIVITY_POKEDEX_ENTRY_NEW = 8,
            ACTIVITY_CATCH_FIRST_THROW = 9,
            ACTIVITY_CATCH_NICE_THROW = 10,
            ACTIVITY_CATCH_GREAT_THROW = 11,
            ACTIVITY_CATCH_EXCELLENT_THROW = 12,
            ACTIVITY_CATCH_CURVEBALL = 13,
            ACTIVITY_CATCH_FIRST_CATCH_OF_DAY = 14,
            ACTIVITY_CATCH_MILESTONE = 15,
            ACTIVITY_TRAIN_POKEMON = 16,
            ACTIVITY_SEARCH_FORT = 17,
            ACTIVITY_RELEASE_POKEMON = 18,
            ACTIVITY_HATCH_EGG_SMALL_BONUS = 19,
            ACTIVITY_HATCH_EGG_MEDIUM_BONUS = 20,
            ACTIVITY_HATCH_EGG_LARGE_BONUS = 21,
            ACTIVITY_DEFEAT_GYM_DEFENDER = 22,
            ACTIVITY_DEFEAT_GYM_LEADER = 23
        }

        enum BadgeType {
            BADGE_UNSET = 0,
            BADGE_TRAVEL_KM = 1,
            BADGE_POKEDEX_ENTRIES = 2,
            BADGE_CAPTURE_TOTAL = 3,
            BADGE_DEFEATED_FORT = 4,
            BADGE_EVOLVED_TOTAL = 5,
            BADGE_HATCHED_TOTAL = 6,
            BADGE_ENCOUNTERED_TOTAL = 7,
            BADGE_POKESTOPS_VISITED = 8,
            BADGE_UNIQUE_POKESTOPS = 9,
            BADGE_POKEBALL_THROWN = 10,
            BADGE_BIG_MAGIKARP = 11,
            BADGE_DEPLOYED_TOTAL = 12,
            BADGE_BATTLE_ATTACK_WON = 13,
            BADGE_BATTLE_TRAINING_WON = 14,
            BADGE_BATTLE_DEFEND_WON = 15,
            BADGE_PRESTIGE_RAISED = 16,
            BADGE_PRESTIGE_DROPPED = 17,
            BADGE_TYPE_NORMAL = 18,
            BADGE_TYPE_FIGHTING = 19,
            BADGE_TYPE_FLYING = 20,
            BADGE_TYPE_POISON = 21,
            BADGE_TYPE_GROUND = 22,
            BADGE_TYPE_ROCK = 23,
            BADGE_TYPE_BUG = 24,
            BADGE_TYPE_GHOST = 25,
            BADGE_TYPE_STEEL = 26,
            BADGE_TYPE_FIRE = 27,
            BADGE_TYPE_WATER = 28,
            BADGE_TYPE_GRASS = 29,
            BADGE_TYPE_ELECTRIC = 30,
            BADGE_TYPE_PSYCHIC = 31,
            BADGE_TYPE_ICE = 32,
            BADGE_TYPE_DRAGON = 33,
            BADGE_TYPE_DARK = 34,
            BADGE_TYPE_FAIRY = 35,
            BADGE_SMALL_RATTATA = 36,
            BADGE_PIKACHU = 37
        }

        enum CameraInterpolation {
            CAM_INTERP_CUT = 0,
            CAM_INTERP_LINEAR = 1,
            CAM_INTERP_SMOOTH = 2,
            CAM_INTERP_SMOOTH_ROT_LINEAR_MOVE = 3,
            CAM_INTERP_DEPENDS = 4
        }

        enum CameraTarget {
            CAM_TARGET_ATTACKER = 0,
            CAM_TARGET_ATTACKER_EDGE = 1,
            CAM_TARGET_ATTACKER_GROUND = 2,
            CAM_TARGET_DEFENDER = 3,
            CAM_TARGET_DEFENDER_EDGE = 4,
            CAM_TARGET_DEFENDER_GROUND = 5,
            CAM_TARGET_ATTACKER_DEFENDER = 6,
            CAM_TARGET_ATTACKER_DEFENDER_EDGE = 7,
            CAM_TARGET_DEFENDER_ATTACKER = 8,
            CAM_TARGET_DEFENDER_ATTACKER_EDGE = 9,
            CAM_TARGET_ATTACKER_DEFENDER_MIRROR = 11,
            CAM_TARGET_SHOULDER_ATTACKER_DEFENDER = 12,
            CAM_TARGET_SHOULDER_ATTACKER_DEFENDER_MIRROR = 13,
            CAM_TARGET_ATTACKER_DEFENDER_WORLD = 14
        }

        enum Gender {
            MALE = 0,
            FEMALE = 1
        }

        enum HoloIapItemCategory {
            IAP_CATEGORY_NONE = 0,
            IAP_CATEGORY_BUNDLE = 1,
            IAP_CATEGORY_ITEMS = 2,
            IAP_CATEGORY_UPGRADES = 3,
            IAP_CATEGORY_POKECOINS = 4
        }

        enum ItemCategory {
            ITEM_CATEGORY_NONE = 0,
            ITEM_CATEGORY_POKEBALL = 1,
            ITEM_CATEGORY_FOOD = 2,
            ITEM_CATEGORY_MEDICINE = 3,
            ITEM_CATEGORY_BOOST = 4,
            ITEM_CATEGORY_UTILITES = 5,
            ITEM_CATEGORY_CAMERA = 6,
            ITEM_CATEGORY_DISK = 7,
            ITEM_CATEGORY_INCUBATOR = 8,
            ITEM_CATEGORY_INCENSE = 9,
            ITEM_CATEGORY_XP_BOOST = 10,
            ITEM_CATEGORY_INVENTORY_UPGRADE = 11
        }

        enum ItemEffect {
            ITEM_EFFECT_NONE = 0,
            ITEM_EFFECT_CAP_NO_FLEE = 1000,
            ITEM_EFFECT_CAP_NO_MOVEMENT = 1002,
            ITEM_EFFECT_CAP_NO_THREAT = 1003,
            ITEM_EFFECT_CAP_TARGET_MAX = 1004,
            ITEM_EFFECT_CAP_TARGET_SLOW = 1005,
            ITEM_EFFECT_CAP_CHANCE_NIGHT = 1006,
            ITEM_EFFECT_CAP_CHANCE_TRAINER = 1007,
            ITEM_EFFECT_CAP_CHANCE_FIRST_THROW = 1008,
            ITEM_EFFECT_CAP_CHANCE_LEGEND = 1009,
            ITEM_EFFECT_CAP_CHANCE_HEAVY = 1010,
            ITEM_EFFECT_CAP_CHANCE_REPEAT = 1011,
            ITEM_EFFECT_CAP_CHANCE_MULTI_THROW = 1012,
            ITEM_EFFECT_CAP_CHANCE_ALWAYS = 1013,
            ITEM_EFFECT_CAP_CHANCE_SINGLE_THROW = 1014
        }

        enum Platform {
            UNSET = 0,
            IOS = 1,
            ANDROID = 2,
            OSX = 3,
            WINDOWS = 4
        }

        enum PokemonClass {
            NORMAL = 0,
            LEGENDARY = 1,
            MYTHIC = 2
        }

        enum PokemonFamilyId {
            FAMILY_UNSET = 0,
            FAMILY_BULBASAUR = 1,
            FAMILY_CHARMANDER = 4,
            FAMILY_SQUIRTLE = 7,
            FAMILY_CATERPIE = 10,
            FAMILY_WEEDLE = 13,
            FAMILY_PIDGEY = 16,
            FAMILY_RATTATA = 19,
            FAMILY_SPEAROW = 21,
            FAMILY_EKANS = 23,
            FAMILY_PIKACHU = 25,
            FAMILY_SANDSHREW = 27,
            FAMILY_NIDORAN_FEMALE = 29,
            FAMILY_NIDORAN_MALE = 32,
            FAMILY_CLEFAIRY = 35,
            FAMILY_VULPIX = 37,
            FAMILY_JIGGLYPUFF = 39,
            FAMILY_ZUBAT = 41,
            FAMILY_ODDISH = 43,
            FAMILY_PARAS = 46,
            FAMILY_VENONAT = 48,
            FAMILY_DIGLETT = 50,
            FAMILY_MEOWTH = 52,
            FAMILY_PSYDUCK = 54,
            FAMILY_MANKEY = 56,
            FAMILY_GROWLITHE = 58,
            FAMILY_POLIWAG = 60,
            FAMILY_ABRA = 63,
            FAMILY_MACHOP = 66,
            FAMILY_BELLSPROUT = 69,
            FAMILY_TENTACOOL = 72,
            FAMILY_GEODUDE = 74,
            FAMILY_PONYTA = 77,
            FAMILY_SLOWPOKE = 79,
            FAMILY_MAGNEMITE = 81,
            FAMILY_FARFETCHD = 83,
            FAMILY_DODUO = 84,
            FAMILY_SEEL = 86,
            FAMILY_GRIMER = 88,
            FAMILY_SHELLDER = 90,
            FAMILY_GASTLY = 92,
            FAMILY_ONIX = 95,
            FAMILY_DROWZEE = 96,
            FAMILY_HYPNO = 97,
            FAMILY_KRABBY = 98,
            FAMILY_VOLTORB = 100,
            FAMILY_EXEGGCUTE = 102,
            FAMILY_CUBONE = 104,
            FAMILY_HITMONLEE = 106,
            FAMILY_HITMONCHAN = 107,
            FAMILY_LICKITUNG = 108,
            FAMILY_KOFFING = 109,
            FAMILY_RHYHORN = 111,
            FAMILY_CHANSEY = 113,
            FAMILY_TANGELA = 114,
            FAMILY_KANGASKHAN = 115,
            FAMILY_HORSEA = 116,
            FAMILY_GOLDEEN = 118,
            FAMILY_STARYU = 120,
            FAMILY_MR_MIME = 122,
            FAMILY_SCYTHER = 123,
            FAMILY_JYNX = 124,
            FAMILY_ELECTABUZZ = 125,
            FAMILY_MAGMAR = 126,
            FAMILY_PINSIR = 127,
            FAMILY_TAUROS = 128,
            FAMILY_MAGIKARP = 129,
            FAMILY_LAPRAS = 131,
            FAMILY_DITTO = 132,
            FAMILY_EEVEE = 133,
            FAMILY_PORYGON = 137,
            FAMILY_OMANYTE = 138,
            FAMILY_KABUTO = 140,
            FAMILY_AERODACTYL = 142,
            FAMILY_SNORLAX = 143,
            FAMILY_ARTICUNO = 144,
            FAMILY_ZAPDOS = 145,
            FAMILY_MOLTRES = 146,
            FAMILY_DRATINI = 147,
            FAMILY_MEWTWO = 150,
            FAMILY_MEW = 151
        }

        enum PokemonId {
            MISSINGNO = 0,
            BULBASAUR = 1,
            IVYSAUR = 2,
            VENUSAUR = 3,
            CHARMANDER = 4,
            CHARMELEON = 5,
            CHARIZARD = 6,
            SQUIRTLE = 7,
            WARTORTLE = 8,
            BLASTOISE = 9,
            CATERPIE = 10,
            METAPOD = 11,
            BUTTERFREE = 12,
            WEEDLE = 13,
            KAKUNA = 14,
            BEEDRILL = 15,
            PIDGEY = 16,
            PIDGEOTTO = 17,
            PIDGEOT = 18,
            RATTATA = 19,
            RATICATE = 20,
            SPEAROW = 21,
            FEAROW = 22,
            EKANS = 23,
            ARBOK = 24,
            PIKACHU = 25,
            RAICHU = 26,
            SANDSHREW = 27,
            SANDSLASH = 28,
            NIDORAN_FEMALE = 29,
            NIDORINA = 30,
            NIDOQUEEN = 31,
            NIDORAN_MALE = 32,
            NIDORINO = 33,
            NIDOKING = 34,
            CLEFAIRY = 35,
            CLEFABLE = 36,
            VULPIX = 37,
            NINETALES = 38,
            JIGGLYPUFF = 39,
            WIGGLYTUFF = 40,
            ZUBAT = 41,
            GOLBAT = 42,
            ODDISH = 43,
            GLOOM = 44,
            VILEPLUME = 45,
            PARAS = 46,
            PARASECT = 47,
            VENONAT = 48,
            VENOMOTH = 49,
            DIGLETT = 50,
            DUGTRIO = 51,
            MEOWTH = 52,
            PERSIAN = 53,
            PSYDUCK = 54,
            GOLDUCK = 55,
            MANKEY = 56,
            PRIMEAPE = 57,
            GROWLITHE = 58,
            ARCANINE = 59,
            POLIWAG = 60,
            POLIWHIRL = 61,
            POLIWRATH = 62,
            ABRA = 63,
            KADABRA = 64,
            ALAKAZAM = 65,
            MACHOP = 66,
            MACHOKE = 67,
            MACHAMP = 68,
            BELLSPROUT = 69,
            WEEPINBELL = 70,
            VICTREEBEL = 71,
            TENTACOOL = 72,
            TENTACRUEL = 73,
            GEODUDE = 74,
            GRAVELER = 75,
            GOLEM = 76,
            PONYTA = 77,
            RAPIDASH = 78,
            SLOWPOKE = 79,
            SLOWBRO = 80,
            MAGNEMITE = 81,
            MAGNETON = 82,
            FARFETCHD = 83,
            DODUO = 84,
            DODRIO = 85,
            SEEL = 86,
            DEWGONG = 87,
            GRIMER = 88,
            MUK = 89,
            SHELLDER = 90,
            CLOYSTER = 91,
            GASTLY = 92,
            HAUNTER = 93,
            GENGAR = 94,
            ONIX = 95,
            DROWZEE = 96,
            HYPNO = 97,
            KRABBY = 98,
            KINGLER = 99,
            VOLTORB = 100,
            ELECTRODE = 101,
            EXEGGCUTE = 102,
            EXEGGUTOR = 103,
            CUBONE = 104,
            MAROWAK = 105,
            HITMONLEE = 106,
            HITMONCHAN = 107,
            LICKITUNG = 108,
            KOFFING = 109,
            WEEZING = 110,
            RHYHORN = 111,
            RHYDON = 112,
            CHANSEY = 113,
            TANGELA = 114,
            KANGASKHAN = 115,
            HORSEA = 116,
            SEADRA = 117,
            GOLDEEN = 118,
            SEAKING = 119,
            STARYU = 120,
            STARMIE = 121,
            MR_MIME = 122,
            SCYTHER = 123,
            JYNX = 124,
            ELECTABUZZ = 125,
            MAGMAR = 126,
            PINSIR = 127,
            TAUROS = 128,
            MAGIKARP = 129,
            GYARADOS = 130,
            LAPRAS = 131,
            DITTO = 132,
            EEVEE = 133,
            VAPOREON = 134,
            JOLTEON = 135,
            FLAREON = 136,
            PORYGON = 137,
            OMANYTE = 138,
            OMASTAR = 139,
            KABUTO = 140,
            KABUTOPS = 141,
            AERODACTYL = 142,
            SNORLAX = 143,
            ARTICUNO = 144,
            ZAPDOS = 145,
            MOLTRES = 146,
            DRATINI = 147,
            DRAGONAIR = 148,
            DRAGONITE = 149,
            MEWTWO = 150,
            MEW = 151
        }

        enum PokemonMove {
            MOVE_UNSET = 0,
            THUNDER_SHOCK = 1,
            QUICK_ATTACK = 2,
            SCRATCH = 3,
            EMBER = 4,
            VINE_WHIP = 5,
            TACKLE = 6,
            RAZOR_LEAF = 7,
            TAKE_DOWN = 8,
            WATER_GUN = 9,
            BITE = 10,
            POUND = 11,
            DOUBLE_SLAP = 12,
            WRAP = 13,
            HYPER_BEAM = 14,
            LICK = 15,
            DARK_PULSE = 16,
            SMOG = 17,
            SLUDGE = 18,
            METAL_CLAW = 19,
            VICE_GRIP = 20,
            FLAME_WHEEL = 21,
            MEGAHORN = 22,
            WING_ATTACK = 23,
            FLAMETHROWER = 24,
            SUCKER_PUNCH = 25,
            DIG = 26,
            LOW_KICK = 27,
            CROSS_CHOP = 28,
            PSYCHO_CUT = 29,
            PSYBEAM = 30,
            EARTHQUAKE = 31,
            STONE_EDGE = 32,
            ICE_PUNCH = 33,
            HEART_STAMP = 34,
            DISCHARGE = 35,
            FLASH_CANNON = 36,
            PECK = 37,
            DRILL_PECK = 38,
            ICE_BEAM = 39,
            BLIZZARD = 40,
            AIR_SLASH = 41,
            HEAT_WAVE = 42,
            TWINEEDLE = 43,
            POISON_JAB = 44,
            AERIAL_ACE = 45,
            DRILL_RUN = 46,
            PETAL_BLIZZARD = 47,
            MEGA_DRAIN = 48,
            BUG_BUZZ = 49,
            POISON_FANG = 50,
            NIGHT_SLASH = 51,
            SLASH = 52,
            BUBBLE_BEAM = 53,
            SUBMISSION = 54,
            KARATE_CHOP = 55,
            LOW_SWEEP = 56,
            AQUA_JET = 57,
            AQUA_TAIL = 58,
            SEED_BOMB = 59,
            PSYSHOCK = 60,
            ROCK_THROW = 61,
            ANCIENT_POWER = 62,
            ROCK_TOMB = 63,
            ROCK_SLIDE = 64,
            POWER_GEM = 65,
            SHADOW_SNEAK = 66,
            SHADOW_PUNCH = 67,
            SHADOW_CLAW = 68,
            OMINOUS_WIND = 69,
            SHADOW_BALL = 70,
            BULLET_PUNCH = 71,
            MAGNET_BOMB = 72,
            STEEL_WING = 73,
            IRON_HEAD = 74,
            PARABOLIC_CHARGE = 75,
            SPARK = 76,
            THUNDER_PUNCH = 77,
            THUNDER = 78,
            THUNDERBOLT = 79,
            TWISTER = 80,
            DRAGON_BREATH = 81,
            DRAGON_PULSE = 82,
            DRAGON_CLAW = 83,
            DISARMING_VOICE = 84,
            DRAINING_KISS = 85,
            DAZZLING_GLEAM = 86,
            MOONBLAST = 87,
            PLAY_ROUGH = 88,
            CROSS_POISON = 89,
            SLUDGE_BOMB = 90,
            SLUDGE_WAVE = 91,
            GUNK_SHOT = 92,
            MUD_SHOT = 93,
            BONE_CLUB = 94,
            BULLDOZE = 95,
            MUD_BOMB = 96,
            FURY_CUTTER = 97,
            BUG_BITE = 98,
            SIGNAL_BEAM = 99,
            X_SCISSOR = 100,
            FLAME_CHARGE = 101,
            FLAME_BURST = 102,
            FIRE_BLAST = 103,
            BRINE = 104,
            WATER_PULSE = 105,
            SCALD = 106,
            HYDRO_PUMP = 107,
            PSYCHIC = 108,
            PSYSTRIKE = 109,
            ICE_SHARD = 110,
            ICY_WIND = 111,
            FROST_BREATH = 112,
            ABSORB = 113,
            GIGA_DRAIN = 114,
            FIRE_PUNCH = 115,
            SOLAR_BEAM = 116,
            LEAF_BLADE = 117,
            POWER_WHIP = 118,
            SPLASH = 119,
            ACID = 120,
            AIR_CUTTER = 121,
            HURRICANE = 122,
            BRICK_BREAK = 123,
            CUT = 124,
            SWIFT = 125,
            HORN_ATTACK = 126,
            STOMP = 127,
            HEADBUTT = 128,
            HYPER_FANG = 129,
            SLAM = 130,
            BODY_SLAM = 131,
            REST = 132,
            STRUGGLE = 133,
            SCALD_BLASTOISE = 134,
            HYDRO_PUMP_BLASTOISE = 135,
            WRAP_GREEN = 136,
            WRAP_PINK = 137,
            FURY_CUTTER_FAST = 200,
            BUG_BITE_FAST = 201,
            BITE_FAST = 202,
            SUCKER_PUNCH_FAST = 203,
            DRAGON_BREATH_FAST = 204,
            THUNDER_SHOCK_FAST = 205,
            SPARK_FAST = 206,
            LOW_KICK_FAST = 207,
            KARATE_CHOP_FAST = 208,
            EMBER_FAST = 209,
            WING_ATTACK_FAST = 210,
            PECK_FAST = 211,
            LICK_FAST = 212,
            SHADOW_CLAW_FAST = 213,
            VINE_WHIP_FAST = 214,
            RAZOR_LEAF_FAST = 215,
            MUD_SHOT_FAST = 216,
            ICE_SHARD_FAST = 217,
            FROST_BREATH_FAST = 218,
            QUICK_ATTACK_FAST = 219,
            SCRATCH_FAST = 220,
            TACKLE_FAST = 221,
            POUND_FAST = 222,
            CUT_FAST = 223,
            POISON_JAB_FAST = 224,
            ACID_FAST = 225,
            PSYCHO_CUT_FAST = 226,
            ROCK_THROW_FAST = 227,
            METAL_CLAW_FAST = 228,
            BULLET_PUNCH_FAST = 229,
            WATER_GUN_FAST = 230,
            SPLASH_FAST = 231,
            WATER_GUN_FAST_BLASTOISE = 232,
            MUD_SLAP_FAST = 233,
            ZEN_HEADBUTT_FAST = 234,
            CONFUSION_FAST = 235,
            POISON_STING_FAST = 236,
            BUBBLE_FAST = 237,
            FEINT_ATTACK_FAST = 238,
            STEEL_WING_FAST = 239,
            FIRE_FANG_FAST = 240,
            ROCK_SMASH_FAST = 241
        }

        enum PokemonMovementType {
            MOVEMENT_STATIC = 0,
            MOVEMENT_JUMP = 1,
            MOVEMENT_VERTICAL = 2,
            MOVEMENT_PSYCHIC = 3,
            MOVEMENT_ELECTRIC = 4,
            MOVEMENT_FLYING = 5,
            MOVEMENT_HOVERING = 6
        }

        enum PokemonType {
            POKEMON_TYPE_NONE = 0,
            POKEMON_TYPE_NORMAL = 1,
            POKEMON_TYPE_FIGHTING = 2,
            POKEMON_TYPE_FLYING = 3,
            POKEMON_TYPE_POISON = 4,
            POKEMON_TYPE_GROUND = 5,
            POKEMON_TYPE_ROCK = 6,
            POKEMON_TYPE_BUG = 7,
            POKEMON_TYPE_GHOST = 8,
            POKEMON_TYPE_STEEL = 9,
            POKEMON_TYPE_FIRE = 10,
            POKEMON_TYPE_WATER = 11,
            POKEMON_TYPE_GRASS = 12,
            POKEMON_TYPE_ELECTRIC = 13,
            POKEMON_TYPE_PSYCHIC = 14,
            POKEMON_TYPE_ICE = 15,
            POKEMON_TYPE_DRAGON = 16,
            POKEMON_TYPE_DARK = 17,
            POKEMON_TYPE_FAIRY = 18
        }

        enum TeamColor {
            NEUTRAL = 0,
            BLUE = 1,
            RED = 2,
            YELLOW = 3
        }

        enum TutorialState {
            LEGAL_SCREEN = 0,
            AVATAR_SELECTION = 1,
            ACCOUNT_CREATION = 2,
            POKEMON_CAPTURE = 3,
            NAME_SELECTION = 4,
            POKEMON_BERRY = 5,
            USE_ITEM = 6,
            FIRST_TIME_EXPERIENCE_COMPLETE = 7,
            POKESTOP_TUTORIAL = 8,
            GYM_TUTORIAL = 9
        }
    }

    namespace Inventory {

        interface IAppliedItem {
            item_id?: (POGOProtos.Inventory.ItemId|null);
            item_type?: (POGOProtos.Inventory.ItemType|null);
            expire_ms?: (number|Long|null);
            applied_ms?: (number|Long|null);
        }

        class AppliedItem implements IAppliedItem {
            constructor(properties?: POGOProtos.Inventory.IAppliedItem);
            public item_id: POGOProtos.Inventory.ItemId;
            public item_type: POGOProtos.Inventory.ItemType;
            public expire_ms: (number|Long);
            public applied_ms: (number|Long);
            public static encode(message: POGOProtos.Inventory.IAppliedItem, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.AppliedItem;
            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Inventory.AppliedItem;
            public static toObject(message: POGOProtos.Inventory.AppliedItem, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
            public toJSON(): [ 'object' ].<string, any>;
        }

        interface IAppliedItems {
            item?: (POGOProtos.Inventory.IAppliedItem[]|null);
        }

        class AppliedItems implements IAppliedItems {
            constructor(properties?: POGOProtos.Inventory.IAppliedItems);
            public item: [ 'Array' ].<POGOProtos.Inventory.IAppliedItem>;
            public static encode(message: POGOProtos.Inventory.IAppliedItems, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.AppliedItems;
            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Inventory.AppliedItems;
            public static toObject(message: POGOProtos.Inventory.AppliedItems, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
            public toJSON(): [ 'object' ].<string, any>;
        }

        interface IEggIncubator {
            id?: (string|null);
            item_id?: (POGOProtos.Inventory.ItemId|null);
            incubator_type?: (POGOProtos.Inventory.EggIncubatorType|null);
            uses_remaining?: (number|null);
            pokemon_id?: (number|Long|null);
            start_km_walked?: (number|null);
            target_km_walked?: (number|null);
        }

        class EggIncubator implements IEggIncubator {
            constructor(properties?: POGOProtos.Inventory.IEggIncubator);
            public id: string;
            public item_id: POGOProtos.Inventory.ItemId;
            public incubator_type: POGOProtos.Inventory.EggIncubatorType;
            public uses_remaining: number;
            public pokemon_id: (number|Long);
            public start_km_walked: number;
            public target_km_walked: number;
            public static encode(message: POGOProtos.Inventory.IEggIncubator, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.EggIncubator;
            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Inventory.EggIncubator;
            public static toObject(message: POGOProtos.Inventory.EggIncubator, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
            public toJSON(): [ 'object' ].<string, any>;
        }

        interface IEggIncubators {
            egg_incubator?: (POGOProtos.Inventory.IEggIncubator|null);
        }

        class EggIncubators implements IEggIncubators {
            constructor(properties?: POGOProtos.Inventory.IEggIncubators);
            public egg_incubator?: (POGOProtos.Inventory.IEggIncubator|null);
            public static encode(message: POGOProtos.Inventory.IEggIncubators, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.EggIncubators;
            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Inventory.EggIncubators;
            public static toObject(message: POGOProtos.Inventory.EggIncubators, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
            public toJSON(): [ 'object' ].<string, any>;
        }

        enum EggIncubatorType {
            INCUBATOR_UNSET = 0,
            INCUBATOR_DISTANCE = 1
        }

        interface IInventoryDelta {
            original_timestamp_ms?: (number|Long|null);
            new_timestamp_ms?: (number|Long|null);
            inventory_items?: (POGOProtos.Inventory.IInventoryItem[]|null);
        }

        class InventoryDelta implements IInventoryDelta {
            constructor(properties?: POGOProtos.Inventory.IInventoryDelta);
            public original_timestamp_ms: (number|Long);
            public new_timestamp_ms: (number|Long);
            public inventory_items: [ 'Array' ].<POGOProtos.Inventory.IInventoryItem>;
            public static encode(message: POGOProtos.Inventory.IInventoryDelta, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.InventoryDelta;
            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Inventory.InventoryDelta;
            public static toObject(message: POGOProtos.Inventory.InventoryDelta, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
            public toJSON(): [ 'object' ].<string, any>;
        }

        interface IInventoryItem {
            modified_timestamp_ms?: (number|Long|null);
            deleted_item_key?: (number|Long|null);
            inventory_item_data?: (POGOProtos.Inventory.IInventoryItemData|null);
        }

        class InventoryItem implements IInventoryItem {
            constructor(properties?: POGOProtos.Inventory.IInventoryItem);
            public modified_timestamp_ms: (number|Long);
            public deleted_item_key: (number|Long);
            public inventory_item_data?: (POGOProtos.Inventory.IInventoryItemData|null);
            public static encode(message: POGOProtos.Inventory.IInventoryItem, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.InventoryItem;
            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Inventory.InventoryItem;
            public static toObject(message: POGOProtos.Inventory.InventoryItem, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
            public toJSON(): [ 'object' ].<string, any>;
        }

        interface IInventoryItemData {
            pokemon_data?: (POGOProtos.Data.IPokemonData|null);
            item?: (POGOProtos.Inventory.IItem|null);
            pokedex_entry?: (POGOProtos.Data.IPokedexEntry|null);
            player_stats?: (POGOProtos.Data.Player.IPlayerStats|null);
            player_currency?: (POGOProtos.Data.Player.IPlayerCurrency|null);
            player_camera?: (POGOProtos.Data.Player.IPlayerCamera|null);
            inventory_upgrades?: (POGOProtos.Inventory.IInventoryUpgrades|null);
            applied_items?: (POGOProtos.Inventory.IAppliedItems|null);
            egg_incubators?: (POGOProtos.Inventory.IEggIncubators|null);
            pokemon_family?: (POGOProtos.Inventory.IPokemonFamily|null);
        }

        class InventoryItemData implements IInventoryItemData {
            constructor(properties?: POGOProtos.Inventory.IInventoryItemData);
            public pokemon_data?: (POGOProtos.Data.IPokemonData|null);
            public item?: (POGOProtos.Inventory.IItem|null);
            public pokedex_entry?: (POGOProtos.Data.IPokedexEntry|null);
            public player_stats?: (POGOProtos.Data.Player.IPlayerStats|null);
            public player_currency?: (POGOProtos.Data.Player.IPlayerCurrency|null);
            public player_camera?: (POGOProtos.Data.Player.IPlayerCamera|null);
            public inventory_upgrades?: (POGOProtos.Inventory.IInventoryUpgrades|null);
            public applied_items?: (POGOProtos.Inventory.IAppliedItems|null);
            public egg_incubators?: (POGOProtos.Inventory.IEggIncubators|null);
            public pokemon_family?: (POGOProtos.Inventory.IPokemonFamily|null);
            public static encode(message: POGOProtos.Inventory.IInventoryItemData, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.InventoryItemData;
            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Inventory.InventoryItemData;
            public static toObject(message: POGOProtos.Inventory.InventoryItemData, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
            public toJSON(): [ 'object' ].<string, any>;
        }

        interface IInventoryUpgrade {
            item_id?: (POGOProtos.Inventory.ItemId|null);
            upgrade_type?: (POGOProtos.Inventory.InventoryUpgradeType|null);
            additional_storage?: (number|null);
        }

        class InventoryUpgrade implements IInventoryUpgrade {
            constructor(properties?: POGOProtos.Inventory.IInventoryUpgrade);
            public item_id: POGOProtos.Inventory.ItemId;
            public upgrade_type: POGOProtos.Inventory.InventoryUpgradeType;
            public additional_storage: number;
            public static encode(message: POGOProtos.Inventory.IInventoryUpgrade, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.InventoryUpgrade;
            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Inventory.InventoryUpgrade;
            public static toObject(message: POGOProtos.Inventory.InventoryUpgrade, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
            public toJSON(): [ 'object' ].<string, any>;
        }

        interface IInventoryUpgrades {
            inventory_upgrades?: (POGOProtos.Inventory.IInventoryUpgrade[]|null);
        }

        class InventoryUpgrades implements IInventoryUpgrades {
            constructor(properties?: POGOProtos.Inventory.IInventoryUpgrades);
            public inventory_upgrades: [ 'Array' ].<POGOProtos.Inventory.IInventoryUpgrade>;
            public static encode(message: POGOProtos.Inventory.IInventoryUpgrades, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.InventoryUpgrades;
            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Inventory.InventoryUpgrades;
            public static toObject(message: POGOProtos.Inventory.InventoryUpgrades, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
            public toJSON(): [ 'object' ].<string, any>;
        }

        enum InventoryUpgradeType {
            UPGRADE_UNSET = 0,
            INCREASE_ITEM_STORAGE = 1,
            INCREASE_POKEMON_STORAGE = 2
        }

        interface IItem {
            item_id?: (POGOProtos.Inventory.ItemId|null);
            count?: (number|null);
            unseen?: (boolean|null);
        }

        class Item implements IItem {
            constructor(properties?: POGOProtos.Inventory.IItem);
            public item_id: POGOProtos.Inventory.ItemId;
            public count: number;
            public unseen: boolean;
            public static encode(message: POGOProtos.Inventory.IItem, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.Item;
            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Inventory.Item;
            public static toObject(message: POGOProtos.Inventory.Item, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
            public toJSON(): [ 'object' ].<string, any>;
        }

        interface IItemAward {
            item_id?: (POGOProtos.Inventory.ItemId|null);
            item_count?: (number|null);
        }

        class ItemAward implements IItemAward {
            constructor(properties?: POGOProtos.Inventory.IItemAward);
            public item_id: POGOProtos.Inventory.ItemId;
            public item_count: number;
            public static encode(message: POGOProtos.Inventory.IItemAward, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.ItemAward;
            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Inventory.ItemAward;
            public static toObject(message: POGOProtos.Inventory.ItemAward, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
            public toJSON(): [ 'object' ].<string, any>;
        }

        enum ItemId {
            ITEM_UNKNOWN = 0,
            ITEM_POKE_BALL = 1,
            ITEM_GREAT_BALL = 2,
            ITEM_ULTRA_BALL = 3,
            ITEM_MASTER_BALL = 4,
            ITEM_POTION = 101,
            ITEM_SUPER_POTION = 102,
            ITEM_HYPER_POTION = 103,
            ITEM_MAX_POTION = 104,
            ITEM_REVIVE = 201,
            ITEM_MAX_REVIVE = 202,
            ITEM_LUCKY_EGG = 301,
            ITEM_INCENSE_ORDINARY = 401,
            ITEM_INCENSE_SPICY = 402,
            ITEM_INCENSE_COOL = 403,
            ITEM_INCENSE_FLORAL = 404,
            ITEM_TROY_DISK = 501,
            ITEM_X_ATTACK = 602,
            ITEM_X_DEFENSE = 603,
            ITEM_X_MIRACLE = 604,
            ITEM_RAZZ_BERRY = 701,
            ITEM_BLUK_BERRY = 702,
            ITEM_NANAB_BERRY = 703,
            ITEM_WEPAR_BERRY = 704,
            ITEM_PINAP_BERRY = 705,
            ITEM_SPECIAL_CAMERA = 801,
            ITEM_INCUBATOR_BASIC_UNLIMITED = 901,
            ITEM_INCUBATOR_BASIC = 902,
            ITEM_POKEMON_STORAGE_UPGRADE = 1001,
            ITEM_ITEM_STORAGE_UPGRADE = 1002
        }

        enum ItemType {
            ITEM_TYPE_NONE = 0,
            ITEM_TYPE_POKEBALL = 1,
            ITEM_TYPE_POTION = 2,
            ITEM_TYPE_REVIVE = 3,
            ITEM_TYPE_MAP = 4,
            ITEM_TYPE_BATTLE = 5,
            ITEM_TYPE_FOOD = 6,
            ITEM_TYPE_CAMERA = 7,
            ITEM_TYPE_DISK = 8,
            ITEM_TYPE_INCUBATOR = 9,
            ITEM_TYPE_INCENSE = 10,
            ITEM_TYPE_XP_BOOST = 11,
            ITEM_TYPE_INVENTORY_UPGRADE = 12
        }

        interface IPokemonFamily {
            family_id?: (POGOProtos.Enums.PokemonFamilyId|null);
            candy?: (number|null);
        }

        class PokemonFamily implements IPokemonFamily {
            constructor(properties?: POGOProtos.Inventory.IPokemonFamily);
            public family_id: POGOProtos.Enums.PokemonFamilyId;
            public candy: number;
            public static encode(message: POGOProtos.Inventory.IPokemonFamily, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.PokemonFamily;
            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Inventory.PokemonFamily;
            public static toObject(message: POGOProtos.Inventory.PokemonFamily, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
            public toJSON(): [ 'object' ].<string, any>;
        }
    }

    namespace Map {

        namespace Fort {

            interface IFortData {
                id?: (string|null);
                last_modified_timestamp_ms?: (number|Long|null);
                latitude?: (number|null);
                longitude?: (number|null);
                enabled?: (boolean|null);
                type?: (POGOProtos.Map.Fort.FortType|null);
                owned_by_team?: (POGOProtos.Enums.TeamColor|null);
                guard_pokemon_id?: (POGOProtos.Enums.PokemonId|null);
                guard_pokemon_cp?: (number|null);
                gym_points?: (number|Long|null);
                is_in_battle?: (boolean|null);
                cooldown_complete_timestamp_ms?: (number|Long|null);
                sponsor?: (POGOProtos.Map.Fort.FortSponsor|null);
                rendering_type?: (POGOProtos.Map.Fort.FortRenderingType|null);
                active_fort_modifier?: (Uint8Array|null);
                lure_info?: (POGOProtos.Map.Fort.IFortLureInfo|null);
            }

            class FortData implements IFortData {
                constructor(properties?: POGOProtos.Map.Fort.IFortData);
                public id: string;
                public last_modified_timestamp_ms: (number|Long);
                public latitude: number;
                public longitude: number;
                public enabled: boolean;
                public type: POGOProtos.Map.Fort.FortType;
                public owned_by_team: POGOProtos.Enums.TeamColor;
                public guard_pokemon_id: POGOProtos.Enums.PokemonId;
                public guard_pokemon_cp: number;
                public gym_points: (number|Long);
                public is_in_battle: boolean;
                public cooldown_complete_timestamp_ms: (number|Long);
                public sponsor: POGOProtos.Map.Fort.FortSponsor;
                public rendering_type: POGOProtos.Map.Fort.FortRenderingType;
                public active_fort_modifier: Uint8Array;
                public lure_info?: (POGOProtos.Map.Fort.IFortLureInfo|null);
                public static encode(message: POGOProtos.Map.Fort.IFortData, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Map.Fort.FortData;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Map.Fort.FortData;
                public static toObject(message: POGOProtos.Map.Fort.FortData, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IFortLureInfo {
                fort_id?: (string|null);
                unknown2?: (number|null);
                active_pokemon_id?: (POGOProtos.Enums.PokemonId|null);
                lure_expires_timestamp_ms?: (number|Long|null);
            }

            class FortLureInfo implements IFortLureInfo {
                constructor(properties?: POGOProtos.Map.Fort.IFortLureInfo);
                public fort_id: string;
                public unknown2: number;
                public active_pokemon_id: POGOProtos.Enums.PokemonId;
                public lure_expires_timestamp_ms: (number|Long);
                public static encode(message: POGOProtos.Map.Fort.IFortLureInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Map.Fort.FortLureInfo;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Map.Fort.FortLureInfo;
                public static toObject(message: POGOProtos.Map.Fort.FortLureInfo, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IFortModifier {
                item_id?: (POGOProtos.Inventory.ItemId|null);
                expiration_timestamp_ms?: (number|Long|null);
                deployer_player_codename?: (string|null);
            }

            class FortModifier implements IFortModifier {
                constructor(properties?: POGOProtos.Map.Fort.IFortModifier);
                public item_id: POGOProtos.Inventory.ItemId;
                public expiration_timestamp_ms: (number|Long);
                public deployer_player_codename: string;
                public static encode(message: POGOProtos.Map.Fort.IFortModifier, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Map.Fort.FortModifier;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Map.Fort.FortModifier;
                public static toObject(message: POGOProtos.Map.Fort.FortModifier, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            enum FortRenderingType {
                DEFAULT = 0,
                INTERNAL_TEST = 1
            }

            enum FortSponsor {
                UNSET_SPONSOR = 0,
                MCDONALDS = 1,
                POKEMON_STORE = 2
            }

            interface IFortSummary {
                fort_summary_id?: (number|null);
                last_modified_timestamp_ms?: (number|null);
                latitude?: (number|null);
                longitude?: (number|null);
            }

            class FortSummary implements IFortSummary {
                constructor(properties?: POGOProtos.Map.Fort.IFortSummary);
                public fort_summary_id: number;
                public last_modified_timestamp_ms: number;
                public latitude: number;
                public longitude: number;
                public static encode(message: POGOProtos.Map.Fort.IFortSummary, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Map.Fort.FortSummary;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Map.Fort.FortSummary;
                public static toObject(message: POGOProtos.Map.Fort.FortSummary, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            enum FortType {
                GYM = 0,
                CHECKPOINT = 1
            }
        }

        interface IMapCell {
            s2_cell_id?: (number|Long|null);
            current_timestamp_ms?: (number|Long|null);
            forts?: (POGOProtos.Map.Fort.IFortData[]|null);
            spawn_points?: (POGOProtos.Map.ISpawnPoint[]|null);
            deleted_objects?: (string[]|null);
            is_truncated_list?: (boolean|null);
            fort_summaries?: (POGOProtos.Map.Fort.IFortSummary[]|null);
            decimated_spawn_points?: (POGOProtos.Map.ISpawnPoint[]|null);
            wild_pokemons?: (POGOProtos.Map.Pokemon.IWildPokemon[]|null);
            catchable_pokemons?: (POGOProtos.Map.Pokemon.IMapPokemon[]|null);
            nearby_pokemons?: (POGOProtos.Map.Pokemon.INearbyPokemon[]|null);
        }

        class MapCell implements IMapCell {
            constructor(properties?: POGOProtos.Map.IMapCell);
            public s2_cell_id: (number|Long);
            public current_timestamp_ms: (number|Long);
            public forts: [ 'Array' ].<POGOProtos.Map.Fort.IFortData>;
            public spawn_points: [ 'Array' ].<POGOProtos.Map.ISpawnPoint>;
            public deleted_objects: [ 'Array' ].<string>;
            public is_truncated_list: boolean;
            public fort_summaries: [ 'Array' ].<POGOProtos.Map.Fort.IFortSummary>;
            public decimated_spawn_points: [ 'Array' ].<POGOProtos.Map.ISpawnPoint>;
            public wild_pokemons: [ 'Array' ].<POGOProtos.Map.Pokemon.IWildPokemon>;
            public catchable_pokemons: [ 'Array' ].<POGOProtos.Map.Pokemon.IMapPokemon>;
            public nearby_pokemons: [ 'Array' ].<POGOProtos.Map.Pokemon.INearbyPokemon>;
            public static encode(message: POGOProtos.Map.IMapCell, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Map.MapCell;
            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Map.MapCell;
            public static toObject(message: POGOProtos.Map.MapCell, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
            public toJSON(): [ 'object' ].<string, any>;
        }

        enum MapObjectsStatus {
            UNSET_STATUS = 0,
            SUCCESS = 1,
            LOCATION_UNSET = 2
        }

        namespace Pokemon {

            interface IMapPokemon {
                spawn_point_id?: (string|null);
                encounter_id?: (number|Long|null);
                pokemon_id?: (POGOProtos.Enums.PokemonId|null);
                expiration_timestamp_ms?: (number|Long|null);
                latitude?: (number|null);
                longitude?: (number|null);
            }

            class MapPokemon implements IMapPokemon {
                constructor(properties?: POGOProtos.Map.Pokemon.IMapPokemon);
                public spawn_point_id: string;
                public encounter_id: (number|Long);
                public pokemon_id: POGOProtos.Enums.PokemonId;
                public expiration_timestamp_ms: (number|Long);
                public latitude: number;
                public longitude: number;
                public static encode(message: POGOProtos.Map.Pokemon.IMapPokemon, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Map.Pokemon.MapPokemon;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Map.Pokemon.MapPokemon;
                public static toObject(message: POGOProtos.Map.Pokemon.MapPokemon, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface INearbyPokemon {
                pokemon_id?: (POGOProtos.Enums.PokemonId|null);
                distance_in_meters?: (number|null);
                encounter_id?: (number|Long|null);
            }

            class NearbyPokemon implements INearbyPokemon {
                constructor(properties?: POGOProtos.Map.Pokemon.INearbyPokemon);
                public pokemon_id: POGOProtos.Enums.PokemonId;
                public distance_in_meters: number;
                public encounter_id: (number|Long);
                public static encode(message: POGOProtos.Map.Pokemon.INearbyPokemon, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Map.Pokemon.NearbyPokemon;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Map.Pokemon.NearbyPokemon;
                public static toObject(message: POGOProtos.Map.Pokemon.NearbyPokemon, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IWildPokemon {
                encounter_id?: (number|Long|null);
                last_modified_timestamp_ms?: (number|Long|null);
                latitude?: (number|null);
                longitude?: (number|null);
                spawn_point_id?: (string|null);
                pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                time_till_hidden_ms?: (number|null);
            }

            class WildPokemon implements IWildPokemon {
                constructor(properties?: POGOProtos.Map.Pokemon.IWildPokemon);
                public encounter_id: (number|Long);
                public last_modified_timestamp_ms: (number|Long);
                public latitude: number;
                public longitude: number;
                public spawn_point_id: string;
                public pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                public time_till_hidden_ms: number;
                public static encode(message: POGOProtos.Map.Pokemon.IWildPokemon, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Map.Pokemon.WildPokemon;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Map.Pokemon.WildPokemon;
                public static toObject(message: POGOProtos.Map.Pokemon.WildPokemon, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }
        }

        interface ISpawnPoint {
            latitude?: (number|null);
            longitude?: (number|null);
        }

        class SpawnPoint implements ISpawnPoint {
            constructor(properties?: POGOProtos.Map.ISpawnPoint);
            public latitude: number;
            public longitude: number;
            public static encode(message: POGOProtos.Map.ISpawnPoint, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Map.SpawnPoint;
            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Map.SpawnPoint;
            public static toObject(message: POGOProtos.Map.SpawnPoint, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
            public toJSON(): [ 'object' ].<string, any>;
        }
    }

    namespace Networking {

        namespace Envelopes {

            interface IAuthTicket {
                start?: (Uint8Array|null);
                expire_timestamp_ms?: (number|Long|null);
                end?: (Uint8Array|null);
            }

            class AuthTicket implements IAuthTicket {
                constructor(properties?: POGOProtos.Networking.Envelopes.IAuthTicket);
                public start: Uint8Array;
                public expire_timestamp_ms: (number|Long);
                public end: Uint8Array;
                public static encode(message: POGOProtos.Networking.Envelopes.IAuthTicket, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Envelopes.AuthTicket;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Envelopes.AuthTicket;
                public static toObject(message: POGOProtos.Networking.Envelopes.AuthTicket, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IRequestEnvelope {
                status_code?: (number|null);
                request_id?: (number|Long|null);
                requests?: (POGOProtos.Networking.Requests.IRequest[]|null);
                unknown6?: (POGOProtos.Networking.Envelopes.IUnknown6[]|null);
                latitude?: (number|null);
                longitude?: (number|null);
                altitude?: (number|null);
                auth_info?: (POGOProtos.Networking.Envelopes.RequestEnvelope.IAuthInfo|null);
                auth_ticket?: (POGOProtos.Networking.Envelopes.IAuthTicket|null);
                unknown12?: (number|Long|null);
            }

            class RequestEnvelope implements IRequestEnvelope {
                constructor(properties?: POGOProtos.Networking.Envelopes.IRequestEnvelope);
                public status_code: number;
                public request_id: (number|Long);
                public requests: [ 'Array' ].<POGOProtos.Networking.Requests.IRequest>;
                public unknown6: [ 'Array' ].<POGOProtos.Networking.Envelopes.IUnknown6>;
                public latitude: number;
                public longitude: number;
                public altitude: number;
                public auth_info?: (POGOProtos.Networking.Envelopes.RequestEnvelope.IAuthInfo|null);
                public auth_ticket?: (POGOProtos.Networking.Envelopes.IAuthTicket|null);
                public unknown12: (number|Long);
                public static encode(message: POGOProtos.Networking.Envelopes.IRequestEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Envelopes.RequestEnvelope;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Envelopes.RequestEnvelope;
                public static toObject(message: POGOProtos.Networking.Envelopes.RequestEnvelope, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace RequestEnvelope {

                interface IAuthInfo {
                    provider?: (string|null);
                    token?: (POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo.IJWT|null);
                }

                class AuthInfo implements IAuthInfo {
                    constructor(properties?: POGOProtos.Networking.Envelopes.RequestEnvelope.IAuthInfo);
                    public provider: string;
                    public token?: (POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo.IJWT|null);
                    public static encode(message: POGOProtos.Networking.Envelopes.RequestEnvelope.IAuthInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo;
                    public static toObject(message: POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                namespace AuthInfo {

                    interface IJWT {
                        contents?: (string|null);
                        unknown2?: (number|null);
                    }

                    class JWT implements IJWT {
                        constructor(properties?: POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo.IJWT);
                        public contents: string;
                        public unknown2: number;
                        public static encode(message: POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo.IJWT, writer?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo.JWT;
                        public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo.JWT;
                        public static toObject(message: POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo.JWT, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                        public toJSON(): [ 'object' ].<string, any>;
                    }
                }
            }

            interface IResponseEnvelope {
                status_code?: (number|null);
                request_id?: (number|Long|null);
                api_url?: (string|null);
                unknown6?: (POGOProtos.Networking.Envelopes.IUnknown6Response[]|null);
                auth_ticket?: (POGOProtos.Networking.Envelopes.IAuthTicket|null);
                returns?: (Uint8Array[]|null);
                error?: (string|null);
            }

            class ResponseEnvelope implements IResponseEnvelope {
                constructor(properties?: POGOProtos.Networking.Envelopes.IResponseEnvelope);
                public status_code: number;
                public request_id: (number|Long);
                public api_url: string;
                public unknown6: [ 'Array' ].<POGOProtos.Networking.Envelopes.IUnknown6Response>;
                public auth_ticket?: (POGOProtos.Networking.Envelopes.IAuthTicket|null);
                public returns: [ 'Array' ].<Uint8Array>;
                public error: string;
                public static encode(message: POGOProtos.Networking.Envelopes.IResponseEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Envelopes.ResponseEnvelope;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Envelopes.ResponseEnvelope;
                public static toObject(message: POGOProtos.Networking.Envelopes.ResponseEnvelope, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace ResponseEnvelope {

                interface IUnknown7 {
                    unknown71?: (Uint8Array|null);
                    unknown72?: (number|Long|null);
                    unknown73?: (Uint8Array|null);
                }

                class Unknown7 implements IUnknown7 {
                    constructor(properties?: POGOProtos.Networking.Envelopes.ResponseEnvelope.IUnknown7);
                    public unknown71: Uint8Array;
                    public unknown72: (number|Long);
                    public unknown73: Uint8Array;
                    public static encode(message: POGOProtos.Networking.Envelopes.ResponseEnvelope.IUnknown7, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Envelopes.ResponseEnvelope.Unknown7;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Envelopes.ResponseEnvelope.Unknown7;
                    public static toObject(message: POGOProtos.Networking.Envelopes.ResponseEnvelope.Unknown7, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }
            }

            interface IUnknown6 {
                request_type?: (number|null);
                unknown2?: (POGOProtos.Networking.Envelopes.Unknown6.IUnknown2|null);
            }

            class Unknown6 implements IUnknown6 {
                constructor(properties?: POGOProtos.Networking.Envelopes.IUnknown6);
                public request_type: number;
                public unknown2?: (POGOProtos.Networking.Envelopes.Unknown6.IUnknown2|null);
                public static encode(message: POGOProtos.Networking.Envelopes.IUnknown6, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Envelopes.Unknown6;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Envelopes.Unknown6;
                public static toObject(message: POGOProtos.Networking.Envelopes.Unknown6, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace Unknown6 {

                interface IUnknown2 {
                    unknown1?: (Uint8Array|null);
                }

                class Unknown2 implements IUnknown2 {
                    constructor(properties?: POGOProtos.Networking.Envelopes.Unknown6.IUnknown2);
                    public unknown1: Uint8Array;
                    public static encode(message: POGOProtos.Networking.Envelopes.Unknown6.IUnknown2, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Envelopes.Unknown6.Unknown2;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Envelopes.Unknown6.Unknown2;
                    public static toObject(message: POGOProtos.Networking.Envelopes.Unknown6.Unknown2, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }
            }

            interface IUnknown6Response {
                response_type?: (number|null);
                response_data?: (POGOProtos.Networking.Envelopes.Unknown6Response.IUnknown2|null);
            }

            class Unknown6Response implements IUnknown6Response {
                constructor(properties?: POGOProtos.Networking.Envelopes.IUnknown6Response);
                public response_type: number;
                public response_data?: (POGOProtos.Networking.Envelopes.Unknown6Response.IUnknown2|null);
                public static encode(message: POGOProtos.Networking.Envelopes.IUnknown6Response, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Envelopes.Unknown6Response;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Envelopes.Unknown6Response;
                public static toObject(message: POGOProtos.Networking.Envelopes.Unknown6Response, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace Unknown6Response {

                interface IUnknown2 {
                    unknown1?: (number|Long|null);
                    items?: (POGOProtos.Networking.Envelopes.Unknown6Response.Unknown2.IStoreItem[]|null);
                    player_currencies?: (POGOProtos.Data.Player.ICurrency[]|null);
                    unknown4?: (string|null);
                }

                class Unknown2 implements IUnknown2 {
                    constructor(properties?: POGOProtos.Networking.Envelopes.Unknown6Response.IUnknown2);
                    public unknown1: (number|Long);
                    public items: [ 'Array' ].<POGOProtos.Networking.Envelopes.Unknown6Response.Unknown2.IStoreItem>;
                    public player_currencies: [ 'Array' ].<POGOProtos.Data.Player.ICurrency>;
                    public unknown4: string;
                    public static encode(message: POGOProtos.Networking.Envelopes.Unknown6Response.IUnknown2, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Envelopes.Unknown6Response.Unknown2;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Envelopes.Unknown6Response.Unknown2;
                    public static toObject(message: POGOProtos.Networking.Envelopes.Unknown6Response.Unknown2, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                namespace Unknown2 {

                    interface IStoreItem {
                        item_id?: (string|null);
                        is_iap?: (boolean|null);
                        currency_to_buy?: (POGOProtos.Data.Player.ICurrency|null);
                        yields_currency?: (POGOProtos.Data.Player.ICurrency|null);
                        yields_item?: (POGOProtos.Inventory.IItem|null);
                        tags?: (POGOProtos.Networking.Envelopes.Unknown6Response.Unknown2.StoreItem.IKeyValue[]|null);
                        unknown7?: (number|null);
                    }

                    class StoreItem implements IStoreItem {
                        constructor(properties?: POGOProtos.Networking.Envelopes.Unknown6Response.Unknown2.IStoreItem);
                        public item_id: string;
                        public is_iap: boolean;
                        public currency_to_buy?: (POGOProtos.Data.Player.ICurrency|null);
                        public yields_currency?: (POGOProtos.Data.Player.ICurrency|null);
                        public yields_item?: (POGOProtos.Inventory.IItem|null);
                        public tags: [ 'Array' ].<POGOProtos.Networking.Envelopes.Unknown6Response.Unknown2.StoreItem.IKeyValue>;
                        public unknown7: number;
                        public static encode(message: POGOProtos.Networking.Envelopes.Unknown6Response.Unknown2.IStoreItem, writer?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Envelopes.Unknown6Response.Unknown2.StoreItem;
                        public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Envelopes.Unknown6Response.Unknown2.StoreItem;
                        public static toObject(message: POGOProtos.Networking.Envelopes.Unknown6Response.Unknown2.StoreItem, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                        public toJSON(): [ 'object' ].<string, any>;
                    }

                    namespace StoreItem {

                        interface IKeyValue {
                            key?: (string|null);
                            value?: (string|null);
                        }

                        class KeyValue implements IKeyValue {
                            constructor(properties?: POGOProtos.Networking.Envelopes.Unknown6Response.Unknown2.StoreItem.IKeyValue);
                            public key: string;
                            public value: string;
                            public static encode(message: POGOProtos.Networking.Envelopes.Unknown6Response.Unknown2.StoreItem.IKeyValue, writer?: $protobuf.Writer): $protobuf.Writer;
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Envelopes.Unknown6Response.Unknown2.StoreItem.KeyValue;
                            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Envelopes.Unknown6Response.Unknown2.StoreItem.KeyValue;
                            public static toObject(message: POGOProtos.Networking.Envelopes.Unknown6Response.Unknown2.StoreItem.KeyValue, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                            public toJSON(): [ 'object' ].<string, any>;
                        }
                    }
                }
            }
        }

        namespace Requests {

            namespace Messages {

                interface IAddFortModifierMessage {
                    modifier_type?: (POGOProtos.Inventory.ItemId|null);
                    fort_id?: (string|null);
                    player_latitude?: (number|null);
                    player_longitude?: (number|null);
                }

                class AddFortModifierMessage implements IAddFortModifierMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IAddFortModifierMessage);
                    public modifier_type: POGOProtos.Inventory.ItemId;
                    public fort_id: string;
                    public player_latitude: number;
                    public player_longitude: number;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IAddFortModifierMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.AddFortModifierMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.AddFortModifierMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.AddFortModifierMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IAttackGymMessage {
                    gym_id?: (string|null);
                    battle_id?: (string|null);
                    attack_actions?: (POGOProtos.Data.Battle.IBattleAction[]|null);
                    last_retrieved_actions?: (POGOProtos.Data.Battle.IBattleAction|null);
                    player_latitude?: (number|null);
                    player_longitude?: (number|null);
                }

                class AttackGymMessage implements IAttackGymMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IAttackGymMessage);
                    public gym_id: string;
                    public battle_id: string;
                    public attack_actions: [ 'Array' ].<POGOProtos.Data.Battle.IBattleAction>;
                    public last_retrieved_actions?: (POGOProtos.Data.Battle.IBattleAction|null);
                    public player_latitude: number;
                    public player_longitude: number;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IAttackGymMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.AttackGymMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.AttackGymMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.AttackGymMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface ICatchPokemonMessage {
                    encounter_id?: (number|Long|null);
                    pokeball?: (number|null);
                    normalized_reticle_size?: (number|null);
                    spawn_point_guid?: (string|null);
                    hit_pokemon?: (boolean|null);
                    spin_modifier?: (number|null);
                    normalized_hit_position?: (number|null);
                }

                class CatchPokemonMessage implements ICatchPokemonMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.ICatchPokemonMessage);
                    public encounter_id: (number|Long);
                    public pokeball: number;
                    public normalized_reticle_size: number;
                    public spawn_point_guid: string;
                    public hit_pokemon: boolean;
                    public spin_modifier: number;
                    public normalized_hit_position: number;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.ICatchPokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.CatchPokemonMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.CatchPokemonMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.CatchPokemonMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface ICheckAwardedBadgesMessage {
                }

                class CheckAwardedBadgesMessage implements ICheckAwardedBadgesMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.ICheckAwardedBadgesMessage);
                    public static encode(message: POGOProtos.Networking.Requests.Messages.ICheckAwardedBadgesMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.CheckAwardedBadgesMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.CheckAwardedBadgesMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.CheckAwardedBadgesMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface ICheckCodenameAvailableMessage {
                    codename?: (string|null);
                }

                class CheckCodenameAvailableMessage implements ICheckCodenameAvailableMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.ICheckCodenameAvailableMessage);
                    public codename: string;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.ICheckCodenameAvailableMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.CheckCodenameAvailableMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.CheckCodenameAvailableMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.CheckCodenameAvailableMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IClaimCodenameMessage {
                    codename?: (string|null);
                }

                class ClaimCodenameMessage implements IClaimCodenameMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IClaimCodenameMessage);
                    public codename: string;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IClaimCodenameMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.ClaimCodenameMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.ClaimCodenameMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.ClaimCodenameMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface ICollectDailyBonusMessage {
                }

                class CollectDailyBonusMessage implements ICollectDailyBonusMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.ICollectDailyBonusMessage);
                    public static encode(message: POGOProtos.Networking.Requests.Messages.ICollectDailyBonusMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.CollectDailyBonusMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.CollectDailyBonusMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.CollectDailyBonusMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface ICollectDailyDefenderBonusMessage {
                }

                class CollectDailyDefenderBonusMessage implements ICollectDailyDefenderBonusMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.ICollectDailyDefenderBonusMessage);
                    public static encode(message: POGOProtos.Networking.Requests.Messages.ICollectDailyDefenderBonusMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.CollectDailyDefenderBonusMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.CollectDailyDefenderBonusMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.CollectDailyDefenderBonusMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IDiskEncounterMessage {
                    encounter_id?: (number|Long|null);
                    fort_id?: (string|null);
                    player_latitude?: (number|null);
                    player_longitude?: (number|null);
                }

                class DiskEncounterMessage implements IDiskEncounterMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IDiskEncounterMessage);
                    public encounter_id: (number|Long);
                    public fort_id: string;
                    public player_latitude: number;
                    public player_longitude: number;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IDiskEncounterMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.DiskEncounterMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.DiskEncounterMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.DiskEncounterMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IDownloadItemTemplatesMessage {
                }

                class DownloadItemTemplatesMessage implements IDownloadItemTemplatesMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IDownloadItemTemplatesMessage);
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IDownloadItemTemplatesMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.DownloadItemTemplatesMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.DownloadItemTemplatesMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.DownloadItemTemplatesMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IDownloadRemoteConfigVersionMessage {
                    platform?: (POGOProtos.Enums.Platform|null);
                    device_manufacturer?: (string|null);
                    device_model?: (string|null);
                    locale?: (string|null);
                    app_version?: (number|null);
                }

                class DownloadRemoteConfigVersionMessage implements IDownloadRemoteConfigVersionMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IDownloadRemoteConfigVersionMessage);
                    public platform: POGOProtos.Enums.Platform;
                    public device_manufacturer: string;
                    public device_model: string;
                    public locale: string;
                    public app_version: number;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IDownloadRemoteConfigVersionMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.DownloadRemoteConfigVersionMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.DownloadRemoteConfigVersionMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.DownloadRemoteConfigVersionMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IDownloadSettingsMessage {
                    hash?: (string|null);
                }

                class DownloadSettingsMessage implements IDownloadSettingsMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IDownloadSettingsMessage);
                    public hash: string;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IDownloadSettingsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.DownloadSettingsMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.DownloadSettingsMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.DownloadSettingsMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IEchoMessage {
                }

                class EchoMessage implements IEchoMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IEchoMessage);
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IEchoMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.EchoMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.EchoMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.EchoMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IEncounterMessage {
                    encounter_id?: (number|Long|null);
                    spawn_point_id?: (string|null);
                    player_latitude?: (number|null);
                    player_longitude?: (number|null);
                }

                class EncounterMessage implements IEncounterMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IEncounterMessage);
                    public encounter_id: (number|Long);
                    public spawn_point_id: string;
                    public player_latitude: number;
                    public player_longitude: number;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IEncounterMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.EncounterMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.EncounterMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.EncounterMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IEncounterTutorialCompleteMessage {
                    pokemon_id?: (POGOProtos.Enums.PokemonId|null);
                }

                class EncounterTutorialCompleteMessage implements IEncounterTutorialCompleteMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IEncounterTutorialCompleteMessage);
                    public pokemon_id: POGOProtos.Enums.PokemonId;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IEncounterTutorialCompleteMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.EncounterTutorialCompleteMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.EncounterTutorialCompleteMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.EncounterTutorialCompleteMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IEquipBadgeMessage {
                    badge_type?: (POGOProtos.Enums.BadgeType|null);
                }

                class EquipBadgeMessage implements IEquipBadgeMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IEquipBadgeMessage);
                    public badge_type: POGOProtos.Enums.BadgeType;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IEquipBadgeMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.EquipBadgeMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.EquipBadgeMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.EquipBadgeMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IEvolvePokemonMessage {
                    pokemon_id?: (number|Long|null);
                }

                class EvolvePokemonMessage implements IEvolvePokemonMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IEvolvePokemonMessage);
                    public pokemon_id: (number|Long);
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IEvolvePokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.EvolvePokemonMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.EvolvePokemonMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.EvolvePokemonMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IFortDeployPokemonMessage {
                    fort_id?: (string|null);
                    pokemon_id?: (number|Long|null);
                    player_latitude?: (number|null);
                    player_longitude?: (number|null);
                }

                class FortDeployPokemonMessage implements IFortDeployPokemonMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IFortDeployPokemonMessage);
                    public fort_id: string;
                    public pokemon_id: (number|Long);
                    public player_latitude: number;
                    public player_longitude: number;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IFortDeployPokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.FortDeployPokemonMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.FortDeployPokemonMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.FortDeployPokemonMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IFortDetailsMessage {
                    fort_id?: (string|null);
                    latitude?: (number|null);
                    longitude?: (number|null);
                }

                class FortDetailsMessage implements IFortDetailsMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IFortDetailsMessage);
                    public fort_id: string;
                    public latitude: number;
                    public longitude: number;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IFortDetailsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.FortDetailsMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.FortDetailsMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.FortDetailsMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IFortRecallPokemonMessage {
                    fort_id?: (string|null);
                    pokemon_id?: (number|Long|null);
                    player_latitude?: (number|null);
                    player_longitude?: (number|null);
                }

                class FortRecallPokemonMessage implements IFortRecallPokemonMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IFortRecallPokemonMessage);
                    public fort_id: string;
                    public pokemon_id: (number|Long);
                    public player_latitude: number;
                    public player_longitude: number;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IFortRecallPokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.FortRecallPokemonMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.FortRecallPokemonMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.FortRecallPokemonMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IFortSearchMessage {
                    fort_id?: (string|null);
                    player_latitude?: (number|null);
                    player_longitude?: (number|null);
                    fort_latitude?: (number|null);
                    fort_longitude?: (number|null);
                }

                class FortSearchMessage implements IFortSearchMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IFortSearchMessage);
                    public fort_id: string;
                    public player_latitude: number;
                    public player_longitude: number;
                    public fort_latitude: number;
                    public fort_longitude: number;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IFortSearchMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.FortSearchMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.FortSearchMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.FortSearchMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IGetAssetDigestMessage {
                    platform?: (POGOProtos.Enums.Platform|null);
                    device_manufacturer?: (string|null);
                    device_model?: (string|null);
                    locale?: (string|null);
                    app_version?: (number|null);
                }

                class GetAssetDigestMessage implements IGetAssetDigestMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGetAssetDigestMessage);
                    public platform: POGOProtos.Enums.Platform;
                    public device_manufacturer: string;
                    public device_model: string;
                    public locale: string;
                    public app_version: number;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGetAssetDigestMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetAssetDigestMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.GetAssetDigestMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GetAssetDigestMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IGetDownloadUrlsMessage {
                    asset_id?: (string[]|null);
                }

                class GetDownloadUrlsMessage implements IGetDownloadUrlsMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGetDownloadUrlsMessage);
                    public asset_id: [ 'Array' ].<string>;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGetDownloadUrlsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetDownloadUrlsMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.GetDownloadUrlsMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GetDownloadUrlsMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IGetGymDetailsMessage {
                    gym_id?: (string|null);
                    player_latitude?: (number|null);
                    player_longitude?: (number|null);
                    gym_latitude?: (number|null);
                    gym_longitude?: (number|null);
                }

                class GetGymDetailsMessage implements IGetGymDetailsMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGetGymDetailsMessage);
                    public gym_id: string;
                    public player_latitude: number;
                    public player_longitude: number;
                    public gym_latitude: number;
                    public gym_longitude: number;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGetGymDetailsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetGymDetailsMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.GetGymDetailsMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GetGymDetailsMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IGetHatchedEggsMessage {
                }

                class GetHatchedEggsMessage implements IGetHatchedEggsMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGetHatchedEggsMessage);
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGetHatchedEggsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetHatchedEggsMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.GetHatchedEggsMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GetHatchedEggsMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IGetIncensePokemonMessage {
                    player_latitude?: (number|null);
                    player_longitude?: (number|null);
                }

                class GetIncensePokemonMessage implements IGetIncensePokemonMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGetIncensePokemonMessage);
                    public player_latitude: number;
                    public player_longitude: number;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGetIncensePokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetIncensePokemonMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.GetIncensePokemonMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GetIncensePokemonMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IGetInventoryMessage {
                    last_timestamp_ms?: (number|Long|null);
                    item_been_seen?: (number|null);
                }

                class GetInventoryMessage implements IGetInventoryMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGetInventoryMessage);
                    public last_timestamp_ms: (number|Long);
                    public item_been_seen: number;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGetInventoryMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetInventoryMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.GetInventoryMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GetInventoryMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IGetMapObjectsMessage {
                    cell_id?: ((number|Long)[]|null);
                    since_timestamp_ms?: ((number|Long)[]|null);
                    latitude?: (number|null);
                    longitude?: (number|null);
                }

                class GetMapObjectsMessage implements IGetMapObjectsMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGetMapObjectsMessage);
                    public cell_id: [ 'Array' ].<(number|Long)>;
                    public since_timestamp_ms: [ 'Array' ].<(number|Long)>;
                    public latitude: number;
                    public longitude: number;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGetMapObjectsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetMapObjectsMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.GetMapObjectsMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GetMapObjectsMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IGetPlayerMessage {
                }

                class GetPlayerMessage implements IGetPlayerMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGetPlayerMessage);
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGetPlayerMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetPlayerMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.GetPlayerMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GetPlayerMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IGetPlayerProfileMessage {
                    player_name?: (string|null);
                }

                class GetPlayerProfileMessage implements IGetPlayerProfileMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGetPlayerProfileMessage);
                    public player_name: string;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGetPlayerProfileMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetPlayerProfileMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.GetPlayerProfileMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GetPlayerProfileMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IGetSuggestedCodenamesMessage {
                }

                class GetSuggestedCodenamesMessage implements IGetSuggestedCodenamesMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGetSuggestedCodenamesMessage);
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGetSuggestedCodenamesMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetSuggestedCodenamesMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.GetSuggestedCodenamesMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GetSuggestedCodenamesMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IIncenseEncounterMessage {
                    encounter_id?: (number|Long|null);
                    encounter_location?: (string|null);
                }

                class IncenseEncounterMessage implements IIncenseEncounterMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IIncenseEncounterMessage);
                    public encounter_id: (number|Long);
                    public encounter_location: string;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IIncenseEncounterMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.IncenseEncounterMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.IncenseEncounterMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.IncenseEncounterMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface ILevelUpRewardsMessage {
                    level?: (number|null);
                }

                class LevelUpRewardsMessage implements ILevelUpRewardsMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.ILevelUpRewardsMessage);
                    public level: number;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.ILevelUpRewardsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.LevelUpRewardsMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.LevelUpRewardsMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.LevelUpRewardsMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IMarkTutorialCompleteMessage {
                    tutorials_completed?: (POGOProtos.Enums.TutorialState[]|null);
                    send_marketing_emails?: (boolean|null);
                    send_push_notifications?: (boolean|null);
                }

                class MarkTutorialCompleteMessage implements IMarkTutorialCompleteMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IMarkTutorialCompleteMessage);
                    public tutorials_completed: [ 'Array' ].<POGOProtos.Enums.TutorialState>;
                    public send_marketing_emails: boolean;
                    public send_push_notifications: boolean;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IMarkTutorialCompleteMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.MarkTutorialCompleteMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.MarkTutorialCompleteMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.MarkTutorialCompleteMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface INicknamePokemonMessage {
                    pokemon_id?: (number|Long|null);
                    nickname?: (string|null);
                }

                class NicknamePokemonMessage implements INicknamePokemonMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.INicknamePokemonMessage);
                    public pokemon_id: (number|Long);
                    public nickname: string;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.INicknamePokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.NicknamePokemonMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.NicknamePokemonMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.NicknamePokemonMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IPlayerUpdateMessage {
                    latitude?: (number|null);
                    longitude?: (number|null);
                }

                class PlayerUpdateMessage implements IPlayerUpdateMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IPlayerUpdateMessage);
                    public latitude: number;
                    public longitude: number;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IPlayerUpdateMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.PlayerUpdateMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.PlayerUpdateMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.PlayerUpdateMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IRecycleInventoryItemMessage {
                    item_id?: (POGOProtos.Inventory.ItemId|null);
                    count?: (number|null);
                }

                class RecycleInventoryItemMessage implements IRecycleInventoryItemMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IRecycleInventoryItemMessage);
                    public item_id: POGOProtos.Inventory.ItemId;
                    public count: number;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IRecycleInventoryItemMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.RecycleInventoryItemMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.RecycleInventoryItemMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.RecycleInventoryItemMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IReleasePokemonMessage {
                    pokemon_id?: (number|Long|null);
                }

                class ReleasePokemonMessage implements IReleasePokemonMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IReleasePokemonMessage);
                    public pokemon_id: (number|Long);
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IReleasePokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.ReleasePokemonMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.ReleasePokemonMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.ReleasePokemonMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface ISetAvatarMessage {
                    player_avatar?: (POGOProtos.Data.Player.IPlayerAvatar|null);
                }

                class SetAvatarMessage implements ISetAvatarMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.ISetAvatarMessage);
                    public player_avatar?: (POGOProtos.Data.Player.IPlayerAvatar|null);
                    public static encode(message: POGOProtos.Networking.Requests.Messages.ISetAvatarMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.SetAvatarMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.SetAvatarMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.SetAvatarMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface ISetContactSettingsMessage {
                    contact_settings?: (POGOProtos.Data.Player.IContactSettings|null);
                }

                class SetContactSettingsMessage implements ISetContactSettingsMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.ISetContactSettingsMessage);
                    public contact_settings?: (POGOProtos.Data.Player.IContactSettings|null);
                    public static encode(message: POGOProtos.Networking.Requests.Messages.ISetContactSettingsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.SetContactSettingsMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.SetContactSettingsMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.SetContactSettingsMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface ISetFavoritePokemonMessage {
                    pokemon_id?: (number|Long|null);
                    is_favorite?: (boolean|null);
                }

                class SetFavoritePokemonMessage implements ISetFavoritePokemonMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.ISetFavoritePokemonMessage);
                    public pokemon_id: (number|Long);
                    public is_favorite: boolean;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.ISetFavoritePokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.SetFavoritePokemonMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.SetFavoritePokemonMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.SetFavoritePokemonMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface ISetPlayerTeamMessage {
                    team?: (POGOProtos.Enums.TeamColor|null);
                }

                class SetPlayerTeamMessage implements ISetPlayerTeamMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.ISetPlayerTeamMessage);
                    public team: POGOProtos.Enums.TeamColor;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.ISetPlayerTeamMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.SetPlayerTeamMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.SetPlayerTeamMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.SetPlayerTeamMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IStartGymBattleMessage {
                    gym_id?: (string|null);
                    attacking_pokemon_ids?: ((number|Long)[]|null);
                    defending_pokemon_id?: (number|Long|null);
                    player_latitude?: (number|null);
                    player_longitude?: (number|null);
                }

                class StartGymBattleMessage implements IStartGymBattleMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IStartGymBattleMessage);
                    public gym_id: string;
                    public attacking_pokemon_ids: [ 'Array' ].<(number|Long)>;
                    public defending_pokemon_id: (number|Long);
                    public player_latitude: number;
                    public player_longitude: number;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IStartGymBattleMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.StartGymBattleMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.StartGymBattleMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.StartGymBattleMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IUpgradePokemonMessage {
                    pokemon_id?: (number|Long|null);
                }

                class UpgradePokemonMessage implements IUpgradePokemonMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IUpgradePokemonMessage);
                    public pokemon_id: (number|Long);
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IUpgradePokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.UpgradePokemonMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.UpgradePokemonMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.UpgradePokemonMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IUseIncenseMessage {
                    incense_type?: (POGOProtos.Inventory.ItemId|null);
                }

                class UseIncenseMessage implements IUseIncenseMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IUseIncenseMessage);
                    public incense_type: POGOProtos.Inventory.ItemId;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IUseIncenseMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.UseIncenseMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.UseIncenseMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.UseIncenseMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IUseItemCaptureMessage {
                    item_id?: (POGOProtos.Inventory.ItemId|null);
                    encounter_id?: (number|Long|null);
                    spawn_point_guid?: (string|null);
                }

                class UseItemCaptureMessage implements IUseItemCaptureMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IUseItemCaptureMessage);
                    public item_id: POGOProtos.Inventory.ItemId;
                    public encounter_id: (number|Long);
                    public spawn_point_guid: string;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IUseItemCaptureMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.UseItemCaptureMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.UseItemCaptureMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.UseItemCaptureMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IUseItemEggIncubatorMessage {
                    item_id?: (string|null);
                    pokemon_id?: (number|Long|null);
                }

                class UseItemEggIncubatorMessage implements IUseItemEggIncubatorMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IUseItemEggIncubatorMessage);
                    public item_id: string;
                    public pokemon_id: (number|Long);
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IUseItemEggIncubatorMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.UseItemEggIncubatorMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.UseItemEggIncubatorMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.UseItemEggIncubatorMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IUseItemGymMessage {
                    item_id?: (POGOProtos.Inventory.ItemId|null);
                    gym_id?: (string|null);
                    player_latitude?: (number|null);
                    player_longitude?: (number|null);
                }

                class UseItemGymMessage implements IUseItemGymMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IUseItemGymMessage);
                    public item_id: POGOProtos.Inventory.ItemId;
                    public gym_id: string;
                    public player_latitude: number;
                    public player_longitude: number;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IUseItemGymMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.UseItemGymMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.UseItemGymMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.UseItemGymMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IUseItemPotionMessage {
                    item_id?: (POGOProtos.Inventory.ItemId|null);
                    pokemon_id?: (number|Long|null);
                }

                class UseItemPotionMessage implements IUseItemPotionMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IUseItemPotionMessage);
                    public item_id: POGOProtos.Inventory.ItemId;
                    public pokemon_id: (number|Long);
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IUseItemPotionMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.UseItemPotionMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.UseItemPotionMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.UseItemPotionMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IUseItemReviveMessage {
                    item_id?: (POGOProtos.Inventory.ItemId|null);
                    pokemon_id?: (number|Long|null);
                }

                class UseItemReviveMessage implements IUseItemReviveMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IUseItemReviveMessage);
                    public item_id: POGOProtos.Inventory.ItemId;
                    public pokemon_id: (number|Long);
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IUseItemReviveMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.UseItemReviveMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.UseItemReviveMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.UseItemReviveMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IUseItemXpBoostMessage {
                    item_id?: (POGOProtos.Inventory.ItemId|null);
                }

                class UseItemXpBoostMessage implements IUseItemXpBoostMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IUseItemXpBoostMessage);
                    public item_id: POGOProtos.Inventory.ItemId;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IUseItemXpBoostMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.UseItemXpBoostMessage;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Messages.UseItemXpBoostMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.UseItemXpBoostMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }
            }

            interface IRequest {
                request_type?: (POGOProtos.Networking.Requests.RequestType|null);
                request_message?: (Uint8Array|null);
            }

            class Request implements IRequest {
                constructor(properties?: POGOProtos.Networking.Requests.IRequest);
                public request_type: POGOProtos.Networking.Requests.RequestType;
                public request_message: Uint8Array;
                public static encode(message: POGOProtos.Networking.Requests.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Request;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Requests.Request;
                public static toObject(message: POGOProtos.Networking.Requests.Request, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            enum RequestType {
                METHOD_UNSET = 0,
                PLAYER_UPDATE = 1,
                GET_PLAYER = 2,
                GET_INVENTORY = 4,
                DOWNLOAD_SETTINGS = 5,
                DOWNLOAD_ITEM_TEMPLATES = 6,
                DOWNLOAD_REMOTE_CONFIG_VERSION = 7,
                FORT_SEARCH = 101,
                ENCOUNTER = 102,
                CATCH_POKEMON = 103,
                FORT_DETAILS = 104,
                ITEM_USE = 105,
                GET_MAP_OBJECTS = 106,
                FORT_DEPLOY_POKEMON = 110,
                FORT_RECALL_POKEMON = 111,
                RELEASE_POKEMON = 112,
                USE_ITEM_POTION = 113,
                USE_ITEM_CAPTURE = 114,
                USE_ITEM_FLEE = 115,
                USE_ITEM_REVIVE = 116,
                TRADE_SEARCH = 117,
                TRADE_OFFER = 118,
                TRADE_RESPONSE = 119,
                TRADE_RESULT = 120,
                GET_PLAYER_PROFILE = 121,
                GET_ITEM_PACK = 122,
                BUY_ITEM_PACK = 123,
                BUY_GEM_PACK = 124,
                EVOLVE_POKEMON = 125,
                GET_HATCHED_EGGS = 126,
                ENCOUNTER_TUTORIAL_COMPLETE = 127,
                LEVEL_UP_REWARDS = 128,
                CHECK_AWARDED_BADGES = 129,
                USE_ITEM_GYM = 133,
                GET_GYM_DETAILS = 134,
                START_GYM_BATTLE = 135,
                ATTACK_GYM = 136,
                RECYCLE_INVENTORY_ITEM = 137,
                COLLECT_DAILY_BONUS = 138,
                USE_ITEM_XP_BOOST = 139,
                USE_ITEM_EGG_INCUBATOR = 140,
                USE_INCENSE = 141,
                GET_INCENSE_POKEMON = 142,
                INCENSE_ENCOUNTER = 143,
                ADD_FORT_MODIFIER = 144,
                DISK_ENCOUNTER = 145,
                COLLECT_DAILY_DEFENDER_BONUS = 146,
                UPGRADE_POKEMON = 147,
                SET_FAVORITE_POKEMON = 148,
                NICKNAME_POKEMON = 149,
                EQUIP_BADGE = 150,
                SET_CONTACT_SETTINGS = 151,
                GET_ASSET_DIGEST = 300,
                GET_DOWNLOAD_URLS = 301,
                GET_SUGGESTED_CODENAMES = 401,
                CHECK_CODENAME_AVAILABLE = 402,
                CLAIM_CODENAME = 403,
                SET_AVATAR = 404,
                SET_PLAYER_TEAM = 405,
                MARK_TUTORIAL_COMPLETE = 406,
                LOAD_SPAWN_POINTS = 500,
                ECHO = 666,
                DEBUG_UPDATE_INVENTORY = 700,
                DEBUG_DELETE_PLAYER = 701,
                SFIDA_REGISTRATION = 800,
                SFIDA_ACTION_LOG = 801,
                SFIDA_CERTIFICATION = 802,
                SFIDA_UPDATE = 803,
                SFIDA_ACTION = 804,
                SFIDA_DOWSER = 805,
                SFIDA_CAPTURE = 806
            }
        }

        namespace Responses {

            interface IAddFortModifierResponse {
            }

            class AddFortModifierResponse implements IAddFortModifierResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IAddFortModifierResponse);
                public static encode(message: POGOProtos.Networking.Responses.IAddFortModifierResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.AddFortModifierResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.AddFortModifierResponse;
                public static toObject(message: POGOProtos.Networking.Responses.AddFortModifierResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IAttackGymResponse {
                result?: (POGOProtos.Networking.Responses.AttackGymResponse.Result|null);
                battle_log?: (POGOProtos.Data.Battle.IBattleLog|null);
                battle_id?: (string|null);
                active_defender?: (POGOProtos.Data.Battle.IBattlePokemonInfo|null);
                active_attacker?: (POGOProtos.Data.Battle.IBattlePokemonInfo|null);
            }

            class AttackGymResponse implements IAttackGymResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IAttackGymResponse);
                public result: POGOProtos.Networking.Responses.AttackGymResponse.Result;
                public battle_log?: (POGOProtos.Data.Battle.IBattleLog|null);
                public battle_id: string;
                public active_defender?: (POGOProtos.Data.Battle.IBattlePokemonInfo|null);
                public active_attacker?: (POGOProtos.Data.Battle.IBattlePokemonInfo|null);
                public static encode(message: POGOProtos.Networking.Responses.IAttackGymResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.AttackGymResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.AttackGymResponse;
                public static toObject(message: POGOProtos.Networking.Responses.AttackGymResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace AttackGymResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_INVALID_ATTACK_ACTIONS = 2,
                    ERROR_NOT_IN_RANGE = 3
                }
            }

            interface ICatchPokemonResponse {
                status?: (POGOProtos.Networking.Responses.CatchPokemonResponse.CatchStatus|null);
                miss_percent?: (number|null);
                capture_award?: (POGOProtos.Data.Capture.ICaptureAward|null);
            }

            class CatchPokemonResponse implements ICatchPokemonResponse {
                constructor(properties?: POGOProtos.Networking.Responses.ICatchPokemonResponse);
                public status: POGOProtos.Networking.Responses.CatchPokemonResponse.CatchStatus;
                public miss_percent: number;
                public capture_award?: (POGOProtos.Data.Capture.ICaptureAward|null);
                public static encode(message: POGOProtos.Networking.Responses.ICatchPokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.CatchPokemonResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.CatchPokemonResponse;
                public static toObject(message: POGOProtos.Networking.Responses.CatchPokemonResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace CatchPokemonResponse {

                enum CatchStatus {
                    CATCH_ERROR = 0,
                    CATCH_SUCCESS = 1,
                    CATCH_ESCAPE = 2,
                    CATCH_FLEE = 3,
                    CATCH_MISSED = 4
                }
            }

            interface ICheckAwardedBadgesResponse {
                success?: (boolean|null);
                awarded_badges?: (POGOProtos.Enums.BadgeType[]|null);
                awarded_badge_levels?: (number[]|null);
            }

            class CheckAwardedBadgesResponse implements ICheckAwardedBadgesResponse {
                constructor(properties?: POGOProtos.Networking.Responses.ICheckAwardedBadgesResponse);
                public success: boolean;
                public awarded_badges: [ 'Array' ].<POGOProtos.Enums.BadgeType>;
                public awarded_badge_levels: [ 'Array' ].<number>;
                public static encode(message: POGOProtos.Networking.Responses.ICheckAwardedBadgesResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.CheckAwardedBadgesResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.CheckAwardedBadgesResponse;
                public static toObject(message: POGOProtos.Networking.Responses.CheckAwardedBadgesResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface ICheckCodenameAvailableResponse {
                codename?: (string|null);
                user_message?: (string|null);
                is_assignable?: (boolean|null);
                status?: (POGOProtos.Networking.Responses.CheckCodenameAvailableResponse.Status|null);
            }

            class CheckCodenameAvailableResponse implements ICheckCodenameAvailableResponse {
                constructor(properties?: POGOProtos.Networking.Responses.ICheckCodenameAvailableResponse);
                public codename: string;
                public user_message: string;
                public is_assignable: boolean;
                public status: POGOProtos.Networking.Responses.CheckCodenameAvailableResponse.Status;
                public static encode(message: POGOProtos.Networking.Responses.ICheckCodenameAvailableResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.CheckCodenameAvailableResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.CheckCodenameAvailableResponse;
                public static toObject(message: POGOProtos.Networking.Responses.CheckCodenameAvailableResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace CheckCodenameAvailableResponse {

                enum Status {
                    UNSET = 0,
                    SUCCESS = 1,
                    CODENAME_NOT_AVAILABLE = 2,
                    CODENAME_NOT_VALID = 3,
                    CURRENT_OWNER = 4,
                    CODENAME_CHANGE_NOT_ALLOWED = 5
                }
            }

            interface IClaimCodenameResponse {
                codename?: (string|null);
                user_message?: (string|null);
                is_assignable?: (boolean|null);
                status?: (POGOProtos.Networking.Responses.ClaimCodenameResponse.Status|null);
            }

            class ClaimCodenameResponse implements IClaimCodenameResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IClaimCodenameResponse);
                public codename: string;
                public user_message: string;
                public is_assignable: boolean;
                public status: POGOProtos.Networking.Responses.ClaimCodenameResponse.Status;
                public static encode(message: POGOProtos.Networking.Responses.IClaimCodenameResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.ClaimCodenameResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.ClaimCodenameResponse;
                public static toObject(message: POGOProtos.Networking.Responses.ClaimCodenameResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace ClaimCodenameResponse {

                enum Status {
                    UNSET = 0,
                    SUCCESS = 1,
                    CODENAME_NOT_AVAILABLE = 2,
                    CODENAME_NOT_VALID = 3,
                    CURRENT_OWNER = 4,
                    CODENAME_CHANGE_NOT_ALLOWED = 5
                }
            }

            interface ICollectDailyBonusResponse {
                result?: (POGOProtos.Networking.Responses.CollectDailyBonusResponse.Result|null);
            }

            class CollectDailyBonusResponse implements ICollectDailyBonusResponse {
                constructor(properties?: POGOProtos.Networking.Responses.ICollectDailyBonusResponse);
                public result: POGOProtos.Networking.Responses.CollectDailyBonusResponse.Result;
                public static encode(message: POGOProtos.Networking.Responses.ICollectDailyBonusResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.CollectDailyBonusResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.CollectDailyBonusResponse;
                public static toObject(message: POGOProtos.Networking.Responses.CollectDailyBonusResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace CollectDailyBonusResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    FAILURE = 2,
                    TOO_SOON = 3
                }
            }

            interface ICollectDailyDefenderBonusResponse {
                result?: (POGOProtos.Networking.Responses.CollectDailyDefenderBonusResponse.Result|null);
                currency_type?: (string[]|null);
                currency_awarded?: (number[]|null);
                defenders_count?: (number|null);
            }

            class CollectDailyDefenderBonusResponse implements ICollectDailyDefenderBonusResponse {
                constructor(properties?: POGOProtos.Networking.Responses.ICollectDailyDefenderBonusResponse);
                public result: POGOProtos.Networking.Responses.CollectDailyDefenderBonusResponse.Result;
                public currency_type: [ 'Array' ].<string>;
                public currency_awarded: [ 'Array' ].<number>;
                public defenders_count: number;
                public static encode(message: POGOProtos.Networking.Responses.ICollectDailyDefenderBonusResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.CollectDailyDefenderBonusResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.CollectDailyDefenderBonusResponse;
                public static toObject(message: POGOProtos.Networking.Responses.CollectDailyDefenderBonusResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace CollectDailyDefenderBonusResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    FAILURE = 2,
                    TOO_SOON = 3,
                    NO_DEFENDERS = 4
                }
            }

            interface IDiskEncounterResponse {
                result?: (POGOProtos.Networking.Responses.DiskEncounterResponse.Result|null);
                pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                capture_probability?: (POGOProtos.Data.Capture.ICaptureProbability|null);
            }

            class DiskEncounterResponse implements IDiskEncounterResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IDiskEncounterResponse);
                public result: POGOProtos.Networking.Responses.DiskEncounterResponse.Result;
                public pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                public capture_probability?: (POGOProtos.Data.Capture.ICaptureProbability|null);
                public static encode(message: POGOProtos.Networking.Responses.IDiskEncounterResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.DiskEncounterResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.DiskEncounterResponse;
                public static toObject(message: POGOProtos.Networking.Responses.DiskEncounterResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace DiskEncounterResponse {

                enum Result {
                    UNKNOWN = 0,
                    SUCCESS = 1,
                    NOT_AVAILABLE = 2,
                    NOT_IN_RANGE = 3,
                    ENCOUNTER_ALREADY_FINISHED = 4,
                    POKEMON_INVENTORY_FULL = 5
                }
            }

            interface IDownloadItemTemplatesResponse {
                success?: (boolean|null);
                item_templates?: (POGOProtos.Networking.Responses.DownloadItemTemplatesResponse.IItemTemplate[]|null);
                timestamp_ms?: (number|Long|null);
            }

            class DownloadItemTemplatesResponse implements IDownloadItemTemplatesResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IDownloadItemTemplatesResponse);
                public success: boolean;
                public item_templates: [ 'Array' ].<POGOProtos.Networking.Responses.DownloadItemTemplatesResponse.IItemTemplate>;
                public timestamp_ms: (number|Long);
                public static encode(message: POGOProtos.Networking.Responses.IDownloadItemTemplatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.DownloadItemTemplatesResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.DownloadItemTemplatesResponse;
                public static toObject(message: POGOProtos.Networking.Responses.DownloadItemTemplatesResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace DownloadItemTemplatesResponse {

                interface IItemTemplate {
                    template_id?: (string|null);
                    pokemon_settings?: (POGOProtos.Settings.Master.IPokemonSettings|null);
                    item_settings?: (POGOProtos.Settings.Master.IItemSettings|null);
                    move_settings?: (POGOProtos.Settings.Master.IMoveSettings|null);
                    move_sequence_settings?: (POGOProtos.Settings.Master.IMoveSequenceSettings|null);
                    type_effective?: (POGOProtos.Settings.Master.ITypeEffectiveSettings|null);
                    badge_settings?: (POGOProtos.Settings.Master.IBadgeSettings|null);
                    camera?: (POGOProtos.Settings.Master.ICameraSettings|null);
                    player_level?: (POGOProtos.Settings.Master.IPlayerLevelSettings|null);
                    gym_level?: (POGOProtos.Settings.Master.IGymLevelSettings|null);
                    battle_settings?: (POGOProtos.Settings.Master.IGymBattleSettings|null);
                    encounter_settings?: (POGOProtos.Settings.Master.IEncounterSettings|null);
                    iap_item_display?: (POGOProtos.Settings.Master.IIapItemDisplay|null);
                    iap_settings?: (POGOProtos.Settings.Master.IIapSettings|null);
                    pokemon_upgrades?: (POGOProtos.Settings.Master.IPokemonUpgradeSettings|null);
                    equipped_badges?: (POGOProtos.Settings.Master.IEquippedBadgeSettings|null);
                }

                class ItemTemplate implements IItemTemplate {
                    constructor(properties?: POGOProtos.Networking.Responses.DownloadItemTemplatesResponse.IItemTemplate);
                    public template_id: string;
                    public pokemon_settings?: (POGOProtos.Settings.Master.IPokemonSettings|null);
                    public item_settings?: (POGOProtos.Settings.Master.IItemSettings|null);
                    public move_settings?: (POGOProtos.Settings.Master.IMoveSettings|null);
                    public move_sequence_settings?: (POGOProtos.Settings.Master.IMoveSequenceSettings|null);
                    public type_effective?: (POGOProtos.Settings.Master.ITypeEffectiveSettings|null);
                    public badge_settings?: (POGOProtos.Settings.Master.IBadgeSettings|null);
                    public camera?: (POGOProtos.Settings.Master.ICameraSettings|null);
                    public player_level?: (POGOProtos.Settings.Master.IPlayerLevelSettings|null);
                    public gym_level?: (POGOProtos.Settings.Master.IGymLevelSettings|null);
                    public battle_settings?: (POGOProtos.Settings.Master.IGymBattleSettings|null);
                    public encounter_settings?: (POGOProtos.Settings.Master.IEncounterSettings|null);
                    public iap_item_display?: (POGOProtos.Settings.Master.IIapItemDisplay|null);
                    public iap_settings?: (POGOProtos.Settings.Master.IIapSettings|null);
                    public pokemon_upgrades?: (POGOProtos.Settings.Master.IPokemonUpgradeSettings|null);
                    public equipped_badges?: (POGOProtos.Settings.Master.IEquippedBadgeSettings|null);
                    public static encode(message: POGOProtos.Networking.Responses.DownloadItemTemplatesResponse.IItemTemplate, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.DownloadItemTemplatesResponse.ItemTemplate;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.DownloadItemTemplatesResponse.ItemTemplate;
                    public static toObject(message: POGOProtos.Networking.Responses.DownloadItemTemplatesResponse.ItemTemplate, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }
            }

            interface IDownloadRemoteConfigVersionResponse {
                result?: (POGOProtos.Networking.Responses.DownloadRemoteConfigVersionResponse.Result|null);
                item_templates_timestamp_ms?: (number|Long|null);
                asset_digest_timestamp_ms?: (number|Long|null);
            }

            class DownloadRemoteConfigVersionResponse implements IDownloadRemoteConfigVersionResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IDownloadRemoteConfigVersionResponse);
                public result: POGOProtos.Networking.Responses.DownloadRemoteConfigVersionResponse.Result;
                public item_templates_timestamp_ms: (number|Long);
                public asset_digest_timestamp_ms: (number|Long);
                public static encode(message: POGOProtos.Networking.Responses.IDownloadRemoteConfigVersionResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.DownloadRemoteConfigVersionResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.DownloadRemoteConfigVersionResponse;
                public static toObject(message: POGOProtos.Networking.Responses.DownloadRemoteConfigVersionResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace DownloadRemoteConfigVersionResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1
                }
            }

            interface IDownloadSettingsResponse {
                error?: (string|null);
                hash?: (string|null);
                settings?: (POGOProtos.Settings.IGlobalSettings|null);
            }

            class DownloadSettingsResponse implements IDownloadSettingsResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IDownloadSettingsResponse);
                public error: string;
                public hash: string;
                public settings?: (POGOProtos.Settings.IGlobalSettings|null);
                public static encode(message: POGOProtos.Networking.Responses.IDownloadSettingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.DownloadSettingsResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.DownloadSettingsResponse;
                public static toObject(message: POGOProtos.Networking.Responses.DownloadSettingsResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IEchoResponse {
                context?: (string|null);
            }

            class EchoResponse implements IEchoResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IEchoResponse);
                public context: string;
                public static encode(message: POGOProtos.Networking.Responses.IEchoResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.EchoResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.EchoResponse;
                public static toObject(message: POGOProtos.Networking.Responses.EchoResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IEncounterResponse {
                wild_pokemon?: (POGOProtos.Map.Pokemon.IWildPokemon|null);
                background?: (POGOProtos.Networking.Responses.EncounterResponse.Background|null);
                status?: (POGOProtos.Networking.Responses.EncounterResponse.Status|null);
            }

            class EncounterResponse implements IEncounterResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IEncounterResponse);
                public wild_pokemon?: (POGOProtos.Map.Pokemon.IWildPokemon|null);
                public background: POGOProtos.Networking.Responses.EncounterResponse.Background;
                public status: POGOProtos.Networking.Responses.EncounterResponse.Status;
                public static encode(message: POGOProtos.Networking.Responses.IEncounterResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.EncounterResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.EncounterResponse;
                public static toObject(message: POGOProtos.Networking.Responses.EncounterResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace EncounterResponse {

                enum Background {
                    PARK = 0,
                    DESERT = 1
                }

                enum Status {
                    ENCOUNTER_ERROR = 0,
                    ENCOUNTER_SUCCESS = 1,
                    ENCOUNTER_NOT_FOUND = 2,
                    ENCOUNTER_CLOSED = 3,
                    ENCOUNTER_POKEMON_FLED = 4,
                    ENCOUNTER_NOT_IN_RANGE = 5,
                    ENCOUNTER_ALREADY_HAPPENED = 6,
                    POKEMON_INVENTORY_FULL = 7
                }
            }

            interface IEncounterTutorialCompleteResponse {
                result?: (POGOProtos.Networking.Responses.EncounterTutorialCompleteResponse.Result|null);
                pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                capture_award?: (POGOProtos.Data.Capture.ICaptureAward|null);
            }

            class EncounterTutorialCompleteResponse implements IEncounterTutorialCompleteResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IEncounterTutorialCompleteResponse);
                public result: POGOProtos.Networking.Responses.EncounterTutorialCompleteResponse.Result;
                public pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                public capture_award?: (POGOProtos.Data.Capture.ICaptureAward|null);
                public static encode(message: POGOProtos.Networking.Responses.IEncounterTutorialCompleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.EncounterTutorialCompleteResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.EncounterTutorialCompleteResponse;
                public static toObject(message: POGOProtos.Networking.Responses.EncounterTutorialCompleteResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace EncounterTutorialCompleteResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_INVALID_POKEMON = 2
                }
            }

            interface IEquipBadgeResponse {
                result?: (POGOProtos.Networking.Responses.EquipBadgeResponse.Result|null);
                equipped?: (POGOProtos.Data.Player.IEquippedBadge|null);
            }

            class EquipBadgeResponse implements IEquipBadgeResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IEquipBadgeResponse);
                public result: POGOProtos.Networking.Responses.EquipBadgeResponse.Result;
                public equipped?: (POGOProtos.Data.Player.IEquippedBadge|null);
                public static encode(message: POGOProtos.Networking.Responses.IEquipBadgeResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.EquipBadgeResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.EquipBadgeResponse;
                public static toObject(message: POGOProtos.Networking.Responses.EquipBadgeResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace EquipBadgeResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    COOLDOWN_ACTIVE = 2,
                    NOT_QUALIFIED = 3
                }
            }

            interface IEvolvePokemonResponse {
                result?: (POGOProtos.Networking.Responses.EvolvePokemonResponse.Result|null);
                evolved_pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                experience_awarded?: (number|null);
                candy_awarded?: (number|null);
            }

            class EvolvePokemonResponse implements IEvolvePokemonResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IEvolvePokemonResponse);
                public result: POGOProtos.Networking.Responses.EvolvePokemonResponse.Result;
                public evolved_pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                public experience_awarded: number;
                public candy_awarded: number;
                public static encode(message: POGOProtos.Networking.Responses.IEvolvePokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.EvolvePokemonResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.EvolvePokemonResponse;
                public static toObject(message: POGOProtos.Networking.Responses.EvolvePokemonResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace EvolvePokemonResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    FAILED_POKEMON_MISSING = 2,
                    FAILED_INSUFFICIENT_RESOURCES = 3,
                    FAILED_POKEMON_CANNOT_EVOLVE = 4,
                    FAILED_POKEMON_IS_DEPLOYED = 5
                }
            }

            interface IFortDeployPokemonResponse {
                result?: (POGOProtos.Networking.Responses.FortDeployPokemonResponse.Result|null);
                fort_details?: (POGOProtos.Networking.Responses.IFortDetailsResponse|null);
                pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                gym_state?: (POGOProtos.Data.Gym.IGymState|null);
            }

            class FortDeployPokemonResponse implements IFortDeployPokemonResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IFortDeployPokemonResponse);
                public result: POGOProtos.Networking.Responses.FortDeployPokemonResponse.Result;
                public fort_details?: (POGOProtos.Networking.Responses.IFortDetailsResponse|null);
                public pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                public gym_state?: (POGOProtos.Data.Gym.IGymState|null);
                public static encode(message: POGOProtos.Networking.Responses.IFortDeployPokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.FortDeployPokemonResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.FortDeployPokemonResponse;
                public static toObject(message: POGOProtos.Networking.Responses.FortDeployPokemonResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace FortDeployPokemonResponse {

                enum Result {
                    NO_RESULT_SET = 0,
                    SUCCESS = 1,
                    ERROR_ALREADY_HAS_POKEMON_ON_FORT = 2,
                    ERROR_OPPOSING_TEAM_OWNS_FORT = 3,
                    ERROR_FORT_IS_FULL = 4,
                    ERROR_NOT_IN_RANGE = 5,
                    ERROR_PLAYER_HAS_NO_TEAM = 6,
                    ERROR_POKEMON_NOT_FULL_HP = 7,
                    ERROR_PLAYER_BELOW_MINIMUM_LEVEL = 8
                }
            }

            interface IFortDetailsResponse {
                fort_id?: (string|null);
                team_color?: (POGOProtos.Enums.TeamColor|null);
                pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                name?: (string|null);
                image_urls?: (string[]|null);
                fp?: (number|null);
                stamina?: (number|null);
                max_stamina?: (number|null);
                type?: (POGOProtos.Map.Fort.FortType|null);
                latitude?: (number|null);
                longitude?: (number|null);
                description?: (string|null);
                modifiers?: (POGOProtos.Map.Fort.IFortModifier[]|null);
            }

            class FortDetailsResponse implements IFortDetailsResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IFortDetailsResponse);
                public fort_id: string;
                public team_color: POGOProtos.Enums.TeamColor;
                public pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                public name: string;
                public image_urls: [ 'Array' ].<string>;
                public fp: number;
                public stamina: number;
                public max_stamina: number;
                public type: POGOProtos.Map.Fort.FortType;
                public latitude: number;
                public longitude: number;
                public description: string;
                public modifiers: [ 'Array' ].<POGOProtos.Map.Fort.IFortModifier>;
                public static encode(message: POGOProtos.Networking.Responses.IFortDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.FortDetailsResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.FortDetailsResponse;
                public static toObject(message: POGOProtos.Networking.Responses.FortDetailsResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IFortRecallPokemonResponse {
                result?: (POGOProtos.Networking.Responses.FortRecallPokemonResponse.Result|null);
                fort_details?: (POGOProtos.Networking.Responses.IFortDetailsResponse|null);
            }

            class FortRecallPokemonResponse implements IFortRecallPokemonResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IFortRecallPokemonResponse);
                public result: POGOProtos.Networking.Responses.FortRecallPokemonResponse.Result;
                public fort_details?: (POGOProtos.Networking.Responses.IFortDetailsResponse|null);
                public static encode(message: POGOProtos.Networking.Responses.IFortRecallPokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.FortRecallPokemonResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.FortRecallPokemonResponse;
                public static toObject(message: POGOProtos.Networking.Responses.FortRecallPokemonResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace FortRecallPokemonResponse {

                enum Result {
                    NO_RESULT_SET = 0,
                    SUCCESS = 1,
                    ERROR_NOT_IN_RANGE = 2,
                    ERROR_POKEMON_NOT_ON_FORT = 3,
                    ERROR_NO_PLAYER = 4
                }
            }

            interface IFortSearchResponse {
                result?: (POGOProtos.Networking.Responses.FortSearchResponse.Result|null);
                items_awarded?: (POGOProtos.Inventory.IItemAward[]|null);
                gems_awarded?: (number|null);
                pokemon_data_egg?: (POGOProtos.Data.IPokemonData|null);
                experience_awarded?: (number|null);
                cooldown_complete_timestamp_ms?: (number|Long|null);
                chain_hack_sequence_number?: (number|null);
            }

            class FortSearchResponse implements IFortSearchResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IFortSearchResponse);
                public result: POGOProtos.Networking.Responses.FortSearchResponse.Result;
                public items_awarded: [ 'Array' ].<POGOProtos.Inventory.IItemAward>;
                public gems_awarded: number;
                public pokemon_data_egg?: (POGOProtos.Data.IPokemonData|null);
                public experience_awarded: number;
                public cooldown_complete_timestamp_ms: (number|Long);
                public chain_hack_sequence_number: number;
                public static encode(message: POGOProtos.Networking.Responses.IFortSearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.FortSearchResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.FortSearchResponse;
                public static toObject(message: POGOProtos.Networking.Responses.FortSearchResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace FortSearchResponse {

                enum Result {
                    NO_RESULT_SET = 0,
                    SUCCESS = 1,
                    OUT_OF_RANGE = 2,
                    IN_COOLDOWN_PERIOD = 3,
                    INVENTORY_FULL = 4
                }
            }

            interface IGetAssetDigestResponse {
                digest?: (POGOProtos.Data.IAssetDigestEntry[]|null);
                timestamp_ms?: (number|Long|null);
            }

            class GetAssetDigestResponse implements IGetAssetDigestResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGetAssetDigestResponse);
                public digest: [ 'Array' ].<POGOProtos.Data.IAssetDigestEntry>;
                public timestamp_ms: (number|Long);
                public static encode(message: POGOProtos.Networking.Responses.IGetAssetDigestResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetAssetDigestResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.GetAssetDigestResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GetAssetDigestResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IGetDownloadUrlsResponse {
                download_urls?: (POGOProtos.Data.IDownloadUrlEntry[]|null);
            }

            class GetDownloadUrlsResponse implements IGetDownloadUrlsResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGetDownloadUrlsResponse);
                public download_urls: [ 'Array' ].<POGOProtos.Data.IDownloadUrlEntry>;
                public static encode(message: POGOProtos.Networking.Responses.IGetDownloadUrlsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetDownloadUrlsResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.GetDownloadUrlsResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GetDownloadUrlsResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IGetGymDetailsResponse {
                gym_state?: (POGOProtos.Data.Gym.IGymState|null);
                name?: (string|null);
                urls?: (string[]|null);
                result?: (POGOProtos.Networking.Responses.GetGymDetailsResponse.Result|null);
                description?: (string|null);
            }

            class GetGymDetailsResponse implements IGetGymDetailsResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGetGymDetailsResponse);
                public gym_state?: (POGOProtos.Data.Gym.IGymState|null);
                public name: string;
                public urls: [ 'Array' ].<string>;
                public result: POGOProtos.Networking.Responses.GetGymDetailsResponse.Result;
                public description: string;
                public static encode(message: POGOProtos.Networking.Responses.IGetGymDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetGymDetailsResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.GetGymDetailsResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GetGymDetailsResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace GetGymDetailsResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_NOT_IN_RANGE = 2
                }
            }

            interface IGetHatchedEggsResponse {
                success?: (boolean|null);
                pokemon_id?: ((number|Long)[]|null);
                experience_awarded?: (number[]|null);
                candy_awarded?: (number[]|null);
                stardust_awarded?: (number[]|null);
            }

            class GetHatchedEggsResponse implements IGetHatchedEggsResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGetHatchedEggsResponse);
                public success: boolean;
                public pokemon_id: [ 'Array' ].<(number|Long)>;
                public experience_awarded: [ 'Array' ].<number>;
                public candy_awarded: [ 'Array' ].<number>;
                public stardust_awarded: [ 'Array' ].<number>;
                public static encode(message: POGOProtos.Networking.Responses.IGetHatchedEggsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetHatchedEggsResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.GetHatchedEggsResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GetHatchedEggsResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IGetIncensePokemonResponse {
                result?: (POGOProtos.Networking.Responses.GetIncensePokemonResponse.Result|null);
                pokemon_type_id?: (number|null);
                latitude?: (number|null);
                longitude?: (number|null);
                encounter_location?: (string|null);
                encounter_id?: (number|Long|null);
                disappear_timestamp_ms?: (number|Long|null);
            }

            class GetIncensePokemonResponse implements IGetIncensePokemonResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGetIncensePokemonResponse);
                public result: POGOProtos.Networking.Responses.GetIncensePokemonResponse.Result;
                public pokemon_type_id: number;
                public latitude: number;
                public longitude: number;
                public encounter_location: string;
                public encounter_id: (number|Long);
                public disappear_timestamp_ms: (number|Long);
                public static encode(message: POGOProtos.Networking.Responses.IGetIncensePokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetIncensePokemonResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.GetIncensePokemonResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GetIncensePokemonResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace GetIncensePokemonResponse {

                enum Result {
                    INCENSE_ENCOUNTER_UNKNOWN = 0,
                    INCENSE_ENCOUNTER_AVAILABLE = 1,
                    INCENSE_ENCOUNTER_NOT_AVAILABLE = 2
                }
            }

            interface IGetInventoryResponse {
                success?: (boolean|null);
                inventory_delta?: (POGOProtos.Inventory.IInventoryDelta|null);
            }

            class GetInventoryResponse implements IGetInventoryResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGetInventoryResponse);
                public success: boolean;
                public inventory_delta?: (POGOProtos.Inventory.IInventoryDelta|null);
                public static encode(message: POGOProtos.Networking.Responses.IGetInventoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetInventoryResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.GetInventoryResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GetInventoryResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IGetMapObjectsResponse {
                map_cells?: (POGOProtos.Map.IMapCell[]|null);
                status?: (POGOProtos.Map.MapObjectsStatus|null);
            }

            class GetMapObjectsResponse implements IGetMapObjectsResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGetMapObjectsResponse);
                public map_cells: [ 'Array' ].<POGOProtos.Map.IMapCell>;
                public status: POGOProtos.Map.MapObjectsStatus;
                public static encode(message: POGOProtos.Networking.Responses.IGetMapObjectsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetMapObjectsResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.GetMapObjectsResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GetMapObjectsResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IGetPlayerProfileResponse {
                result?: (POGOProtos.Networking.Responses.GetPlayerProfileResponse.Result|null);
                start_time?: (number|Long|null);
                badges?: (POGOProtos.Data.IPlayerBadge[]|null);
            }

            class GetPlayerProfileResponse implements IGetPlayerProfileResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGetPlayerProfileResponse);
                public result: POGOProtos.Networking.Responses.GetPlayerProfileResponse.Result;
                public start_time: (number|Long);
                public badges: [ 'Array' ].<POGOProtos.Data.IPlayerBadge>;
                public static encode(message: POGOProtos.Networking.Responses.IGetPlayerProfileResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetPlayerProfileResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.GetPlayerProfileResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GetPlayerProfileResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace GetPlayerProfileResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1
                }
            }

            interface IGetPlayerResponse {
                success?: (boolean|null);
                player_data?: (POGOProtos.Data.IPlayerData|null);
            }

            class GetPlayerResponse implements IGetPlayerResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGetPlayerResponse);
                public success: boolean;
                public player_data?: (POGOProtos.Data.IPlayerData|null);
                public static encode(message: POGOProtos.Networking.Responses.IGetPlayerResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetPlayerResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.GetPlayerResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GetPlayerResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IGetSuggestedCodenamesResponse {
                codenames?: (string[]|null);
                success?: (boolean|null);
            }

            class GetSuggestedCodenamesResponse implements IGetSuggestedCodenamesResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGetSuggestedCodenamesResponse);
                public codenames: [ 'Array' ].<string>;
                public success: boolean;
                public static encode(message: POGOProtos.Networking.Responses.IGetSuggestedCodenamesResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetSuggestedCodenamesResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.GetSuggestedCodenamesResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GetSuggestedCodenamesResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IIncenseEncounterResponse {
                result?: (POGOProtos.Networking.Responses.IncenseEncounterResponse.Result|null);
                pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                capture_probability?: (POGOProtos.Data.Capture.ICaptureProbability|null);
            }

            class IncenseEncounterResponse implements IIncenseEncounterResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IIncenseEncounterResponse);
                public result: POGOProtos.Networking.Responses.IncenseEncounterResponse.Result;
                public pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                public capture_probability?: (POGOProtos.Data.Capture.ICaptureProbability|null);
                public static encode(message: POGOProtos.Networking.Responses.IIncenseEncounterResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.IncenseEncounterResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.IncenseEncounterResponse;
                public static toObject(message: POGOProtos.Networking.Responses.IncenseEncounterResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace IncenseEncounterResponse {

                enum Result {
                    INCENSE_ENCOUNTER_UNKNOWN = 0,
                    INCENSE_ENCOUNTER_SUCCESS = 1,
                    INCENSE_ENCOUNTER_NOT_AVAILABLE = 2,
                    POKEMON_INVENTORY_FULL = 3
                }
            }

            interface ILevelUpRewardsResponse {
                result?: (POGOProtos.Networking.Responses.LevelUpRewardsResponse.Result|null);
                items_awarded?: (POGOProtos.Inventory.IItemAward[]|null);
                items_unlocked?: (POGOProtos.Inventory.ItemId[]|null);
            }

            class LevelUpRewardsResponse implements ILevelUpRewardsResponse {
                constructor(properties?: POGOProtos.Networking.Responses.ILevelUpRewardsResponse);
                public result: POGOProtos.Networking.Responses.LevelUpRewardsResponse.Result;
                public items_awarded: [ 'Array' ].<POGOProtos.Inventory.IItemAward>;
                public items_unlocked: [ 'Array' ].<POGOProtos.Inventory.ItemId>;
                public static encode(message: POGOProtos.Networking.Responses.ILevelUpRewardsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.LevelUpRewardsResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.LevelUpRewardsResponse;
                public static toObject(message: POGOProtos.Networking.Responses.LevelUpRewardsResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace LevelUpRewardsResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    AWARDED_ALREADY = 2
                }
            }

            interface IMarkTutorialCompleteResponse {
                success?: (boolean|null);
                player_data?: (POGOProtos.Data.IPlayerData|null);
            }

            class MarkTutorialCompleteResponse implements IMarkTutorialCompleteResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IMarkTutorialCompleteResponse);
                public success: boolean;
                public player_data?: (POGOProtos.Data.IPlayerData|null);
                public static encode(message: POGOProtos.Networking.Responses.IMarkTutorialCompleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.MarkTutorialCompleteResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.MarkTutorialCompleteResponse;
                public static toObject(message: POGOProtos.Networking.Responses.MarkTutorialCompleteResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface INicknamePokemonResponse {
                result?: (POGOProtos.Networking.Responses.NicknamePokemonResponse.Result|null);
            }

            class NicknamePokemonResponse implements INicknamePokemonResponse {
                constructor(properties?: POGOProtos.Networking.Responses.INicknamePokemonResponse);
                public result: POGOProtos.Networking.Responses.NicknamePokemonResponse.Result;
                public static encode(message: POGOProtos.Networking.Responses.INicknamePokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.NicknamePokemonResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.NicknamePokemonResponse;
                public static toObject(message: POGOProtos.Networking.Responses.NicknamePokemonResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace NicknamePokemonResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_INVALID_NICKNAME = 2,
                    ERROR_POKEMON_NOT_FOUND = 3,
                    ERROR_POKEMON_IS_EGG = 4
                }
            }

            interface IPlayerUpdateResponse {
                wild_pokemons?: (POGOProtos.Map.Pokemon.IWildPokemon[]|null);
                forts?: (POGOProtos.Map.Fort.IFortData[]|null);
                forts_nearby?: (number|null);
            }

            class PlayerUpdateResponse implements IPlayerUpdateResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IPlayerUpdateResponse);
                public wild_pokemons: [ 'Array' ].<POGOProtos.Map.Pokemon.IWildPokemon>;
                public forts: [ 'Array' ].<POGOProtos.Map.Fort.IFortData>;
                public forts_nearby: number;
                public static encode(message: POGOProtos.Networking.Responses.IPlayerUpdateResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.PlayerUpdateResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.PlayerUpdateResponse;
                public static toObject(message: POGOProtos.Networking.Responses.PlayerUpdateResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IRecycleInventoryItemResponse {
                result?: (POGOProtos.Networking.Responses.RecycleInventoryItemResponse.Result|null);
                new_count?: (number|null);
            }

            class RecycleInventoryItemResponse implements IRecycleInventoryItemResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IRecycleInventoryItemResponse);
                public result: POGOProtos.Networking.Responses.RecycleInventoryItemResponse.Result;
                public new_count: number;
                public static encode(message: POGOProtos.Networking.Responses.IRecycleInventoryItemResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.RecycleInventoryItemResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.RecycleInventoryItemResponse;
                public static toObject(message: POGOProtos.Networking.Responses.RecycleInventoryItemResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace RecycleInventoryItemResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_NOT_ENOUGH_COPIES = 2,
                    ERROR_CANNOT_RECYCLE_INCUBATORS = 3
                }
            }

            interface IReleasePokemonResponse {
                result?: (POGOProtos.Networking.Responses.ReleasePokemonResponse.Result|null);
                candy_awarded?: (number|null);
            }

            class ReleasePokemonResponse implements IReleasePokemonResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IReleasePokemonResponse);
                public result: POGOProtos.Networking.Responses.ReleasePokemonResponse.Result;
                public candy_awarded: number;
                public static encode(message: POGOProtos.Networking.Responses.IReleasePokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.ReleasePokemonResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.ReleasePokemonResponse;
                public static toObject(message: POGOProtos.Networking.Responses.ReleasePokemonResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace ReleasePokemonResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    POKEMON_DEPLOYED = 2,
                    FAILED = 3,
                    ERROR_POKEMON_IS_EGG = 4
                }
            }

            interface ISetAvatarResponse {
                status?: (POGOProtos.Networking.Responses.SetAvatarResponse.Status|null);
                player_data?: (POGOProtos.Data.IPlayerData|null);
            }

            class SetAvatarResponse implements ISetAvatarResponse {
                constructor(properties?: POGOProtos.Networking.Responses.ISetAvatarResponse);
                public status: POGOProtos.Networking.Responses.SetAvatarResponse.Status;
                public player_data?: (POGOProtos.Data.IPlayerData|null);
                public static encode(message: POGOProtos.Networking.Responses.ISetAvatarResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.SetAvatarResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.SetAvatarResponse;
                public static toObject(message: POGOProtos.Networking.Responses.SetAvatarResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace SetAvatarResponse {

                enum Status {
                    UNSET = 0,
                    SUCCESS = 1,
                    AVATAR_ALREADY_SET = 2,
                    FAILURE = 3
                }
            }

            interface ISetContactSettingsResponse {
                status?: (POGOProtos.Networking.Responses.SetContactSettingsResponse.Status|null);
                player_data?: (POGOProtos.Data.IPlayerData|null);
            }

            class SetContactSettingsResponse implements ISetContactSettingsResponse {
                constructor(properties?: POGOProtos.Networking.Responses.ISetContactSettingsResponse);
                public status: POGOProtos.Networking.Responses.SetContactSettingsResponse.Status;
                public player_data?: (POGOProtos.Data.IPlayerData|null);
                public static encode(message: POGOProtos.Networking.Responses.ISetContactSettingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.SetContactSettingsResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.SetContactSettingsResponse;
                public static toObject(message: POGOProtos.Networking.Responses.SetContactSettingsResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace SetContactSettingsResponse {

                enum Status {
                    UNSET = 0,
                    SUCCESS = 1,
                    FAILURE = 2
                }
            }

            interface ISetFavoritePokemonResponse {
                result?: (POGOProtos.Networking.Responses.SetFavoritePokemonResponse.Result|null);
            }

            class SetFavoritePokemonResponse implements ISetFavoritePokemonResponse {
                constructor(properties?: POGOProtos.Networking.Responses.ISetFavoritePokemonResponse);
                public result: POGOProtos.Networking.Responses.SetFavoritePokemonResponse.Result;
                public static encode(message: POGOProtos.Networking.Responses.ISetFavoritePokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.SetFavoritePokemonResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.SetFavoritePokemonResponse;
                public static toObject(message: POGOProtos.Networking.Responses.SetFavoritePokemonResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace SetFavoritePokemonResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_POKEMON_NOT_FOUND = 2,
                    ERROR_POKEMON_IS_EGG = 3
                }
            }

            interface ISetPlayerTeamResponse {
                status?: (POGOProtos.Networking.Responses.SetPlayerTeamResponse.Status|null);
                player_data?: (POGOProtos.Data.IPlayerData|null);
            }

            class SetPlayerTeamResponse implements ISetPlayerTeamResponse {
                constructor(properties?: POGOProtos.Networking.Responses.ISetPlayerTeamResponse);
                public status: POGOProtos.Networking.Responses.SetPlayerTeamResponse.Status;
                public player_data?: (POGOProtos.Data.IPlayerData|null);
                public static encode(message: POGOProtos.Networking.Responses.ISetPlayerTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.SetPlayerTeamResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.SetPlayerTeamResponse;
                public static toObject(message: POGOProtos.Networking.Responses.SetPlayerTeamResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace SetPlayerTeamResponse {

                enum Status {
                    UNSET = 0,
                    SUCCESS = 1,
                    TEAM_ALREADY_SET = 2,
                    FAILURE = 3
                }
            }

            interface IStartGymBattleResponse {
                result?: (POGOProtos.Networking.Responses.StartGymBattleResponse.Result|null);
                battle_start_timestamp_ms?: (number|Long|null);
                battle_end_timestamp_ms?: (number|Long|null);
                battle_id?: (string|null);
                defender?: (POGOProtos.Data.Battle.IBattleParticipant|null);
                battle_log?: (POGOProtos.Data.Battle.IBattleLog|null);
            }

            class StartGymBattleResponse implements IStartGymBattleResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IStartGymBattleResponse);
                public result: POGOProtos.Networking.Responses.StartGymBattleResponse.Result;
                public battle_start_timestamp_ms: (number|Long);
                public battle_end_timestamp_ms: (number|Long);
                public battle_id: string;
                public defender?: (POGOProtos.Data.Battle.IBattleParticipant|null);
                public battle_log?: (POGOProtos.Data.Battle.IBattleLog|null);
                public static encode(message: POGOProtos.Networking.Responses.IStartGymBattleResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.StartGymBattleResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.StartGymBattleResponse;
                public static toObject(message: POGOProtos.Networking.Responses.StartGymBattleResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace StartGymBattleResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_GYM_NOT_FOUND = 2,
                    ERROR_GYM_NEUTRAL = 3,
                    ERROR_GYM_WRONG_TEAM = 4,
                    ERROR_GYM_EMPTY = 5,
                    ERROR_INVALID_DEFENDER = 6,
                    ERROR_TRAINING_INVALID_ATTACKER_COUNT = 7,
                    ERROR_ALL_POKEMON_FAINTED = 8,
                    ERROR_TOO_MANY_BATTLES = 9,
                    ERROR_TOO_MANY_PLAYERS = 10,
                    ERROR_GYM_BATTLE_LOCKOUT = 11,
                    ERROR_PLAYER_BELOW_MINIMUM_LEVEL = 12,
                    ERROR_NOT_IN_RANGE = 13
                }
            }

            interface IUpgradePokemonResponse {
                result?: (POGOProtos.Networking.Responses.UpgradePokemonResponse.Result|null);
                upgraded_pokemon?: (POGOProtos.Data.IPokemonData|null);
            }

            class UpgradePokemonResponse implements IUpgradePokemonResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IUpgradePokemonResponse);
                public result: POGOProtos.Networking.Responses.UpgradePokemonResponse.Result;
                public upgraded_pokemon?: (POGOProtos.Data.IPokemonData|null);
                public static encode(message: POGOProtos.Networking.Responses.IUpgradePokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.UpgradePokemonResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.UpgradePokemonResponse;
                public static toObject(message: POGOProtos.Networking.Responses.UpgradePokemonResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace UpgradePokemonResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_POKEMON_NOT_FOUND = 2,
                    ERROR_INSUFFICIENT_RESOURCES = 3,
                    ERROR_UPGRADE_NOT_AVAILABLE = 4,
                    ERROR_POKEMON_IS_DEPLOYED = 5
                }
            }

            interface IUseIncenseResponse {
                result?: (POGOProtos.Networking.Responses.UseIncenseResponse.Result|null);
                applied_incense?: (POGOProtos.Inventory.IAppliedItem|null);
            }

            class UseIncenseResponse implements IUseIncenseResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IUseIncenseResponse);
                public result: POGOProtos.Networking.Responses.UseIncenseResponse.Result;
                public applied_incense?: (POGOProtos.Inventory.IAppliedItem|null);
                public static encode(message: POGOProtos.Networking.Responses.IUseIncenseResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.UseIncenseResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.UseIncenseResponse;
                public static toObject(message: POGOProtos.Networking.Responses.UseIncenseResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace UseIncenseResponse {

                enum Result {
                    UNKNOWN = 0,
                    SUCCESS = 1,
                    INCENSE_ALREADY_ACTIVE = 2,
                    NONE_IN_INVENTORY = 3,
                    LOCATION_UNSET = 4
                }
            }

            interface IUseItemCaptureResponse {
                success?: (boolean|null);
                item_capture_mult?: (number|null);
                item_flee_mult?: (number|null);
                stop_movement?: (boolean|null);
                stop_attack?: (boolean|null);
                target_max?: (boolean|null);
                target_slow?: (boolean|null);
            }

            class UseItemCaptureResponse implements IUseItemCaptureResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IUseItemCaptureResponse);
                public success: boolean;
                public item_capture_mult: number;
                public item_flee_mult: number;
                public stop_movement: boolean;
                public stop_attack: boolean;
                public target_max: boolean;
                public target_slow: boolean;
                public static encode(message: POGOProtos.Networking.Responses.IUseItemCaptureResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.UseItemCaptureResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.UseItemCaptureResponse;
                public static toObject(message: POGOProtos.Networking.Responses.UseItemCaptureResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IUseItemEggIncubatorResponse {
                result?: (POGOProtos.Networking.Responses.UseItemEggIncubatorResponse.Result|null);
                egg_incubator?: (POGOProtos.Inventory.IEggIncubator|null);
            }

            class UseItemEggIncubatorResponse implements IUseItemEggIncubatorResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IUseItemEggIncubatorResponse);
                public result: POGOProtos.Networking.Responses.UseItemEggIncubatorResponse.Result;
                public egg_incubator?: (POGOProtos.Inventory.IEggIncubator|null);
                public static encode(message: POGOProtos.Networking.Responses.IUseItemEggIncubatorResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.UseItemEggIncubatorResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.UseItemEggIncubatorResponse;
                public static toObject(message: POGOProtos.Networking.Responses.UseItemEggIncubatorResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace UseItemEggIncubatorResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_INCUBATOR_NOT_FOUND = 2,
                    ERROR_POKEMON_EGG_NOT_FOUND = 3,
                    ERROR_POKEMON_ID_NOT_EGG = 4,
                    ERROR_INCUBATOR_ALREADY_IN_USE = 5,
                    ERROR_POKEMON_ALREADY_INCUBATING = 6,
                    ERROR_INCUBATOR_NO_USES_REMAINING = 7
                }
            }

            interface IUseItemGymResponse {
                result?: (POGOProtos.Networking.Responses.UseItemGymResponse.Result|null);
                updated_gp?: (number|Long|null);
            }

            class UseItemGymResponse implements IUseItemGymResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IUseItemGymResponse);
                public result: POGOProtos.Networking.Responses.UseItemGymResponse.Result;
                public updated_gp: (number|Long);
                public static encode(message: POGOProtos.Networking.Responses.IUseItemGymResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.UseItemGymResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.UseItemGymResponse;
                public static toObject(message: POGOProtos.Networking.Responses.UseItemGymResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace UseItemGymResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_CANNOT_USE = 2,
                    ERROR_NOT_IN_RANGE = 3
                }
            }

            interface IUseItemPotionResponse {
                result?: (POGOProtos.Networking.Responses.UseItemPotionResponse.Result|null);
                stamina?: (number|null);
            }

            class UseItemPotionResponse implements IUseItemPotionResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IUseItemPotionResponse);
                public result: POGOProtos.Networking.Responses.UseItemPotionResponse.Result;
                public stamina: number;
                public static encode(message: POGOProtos.Networking.Responses.IUseItemPotionResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.UseItemPotionResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.UseItemPotionResponse;
                public static toObject(message: POGOProtos.Networking.Responses.UseItemPotionResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace UseItemPotionResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_NO_POKEMON = 2,
                    ERROR_CANNOT_USE = 3,
                    ERROR_DEPLOYED_TO_FORT = 4
                }
            }

            interface IUseItemReviveResponse {
                result?: (POGOProtos.Networking.Responses.UseItemReviveResponse.Result|null);
                stamina?: (number|null);
            }

            class UseItemReviveResponse implements IUseItemReviveResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IUseItemReviveResponse);
                public result: POGOProtos.Networking.Responses.UseItemReviveResponse.Result;
                public stamina: number;
                public static encode(message: POGOProtos.Networking.Responses.IUseItemReviveResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.UseItemReviveResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.UseItemReviveResponse;
                public static toObject(message: POGOProtos.Networking.Responses.UseItemReviveResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace UseItemReviveResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_NO_POKEMON = 2,
                    ERROR_CANNOT_USE = 3,
                    ERROR_DEPLOYED_TO_FORT = 4
                }
            }

            interface IUseItemXpBoostResponse {
                result?: (POGOProtos.Networking.Responses.UseItemXpBoostResponse.Result|null);
                applied_items?: (POGOProtos.Inventory.IAppliedItems|null);
            }

            class UseItemXpBoostResponse implements IUseItemXpBoostResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IUseItemXpBoostResponse);
                public result: POGOProtos.Networking.Responses.UseItemXpBoostResponse.Result;
                public applied_items?: (POGOProtos.Inventory.IAppliedItems|null);
                public static encode(message: POGOProtos.Networking.Responses.IUseItemXpBoostResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.UseItemXpBoostResponse;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Networking.Responses.UseItemXpBoostResponse;
                public static toObject(message: POGOProtos.Networking.Responses.UseItemXpBoostResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace UseItemXpBoostResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_INVALID_ITEM_TYPE = 2,
                    ERROR_XP_BOOST_ALREADY_ACTIVE = 3,
                    ERROR_NO_ITEMS_REMAINING = 4,
                    ERROR_LOCATION_UNSET = 5
                }
            }
        }
    }

    namespace Settings {

        interface IDownloadSettingsAction {
            hash?: (string|null);
        }

        class DownloadSettingsAction implements IDownloadSettingsAction {
            constructor(properties?: POGOProtos.Settings.IDownloadSettingsAction);
            public hash: string;
            public static encode(message: POGOProtos.Settings.IDownloadSettingsAction, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.DownloadSettingsAction;
            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.DownloadSettingsAction;
            public static toObject(message: POGOProtos.Settings.DownloadSettingsAction, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
            public toJSON(): [ 'object' ].<string, any>;
        }

        interface IFortSettings {
            interaction_range_meters?: (number|null);
            max_total_deployed_pokemon?: (number|null);
            max_player_deployed_pokemon?: (number|null);
            deploy_stamina_multiplier?: (number|null);
            deploy_attack_multiplier?: (number|null);
            far_interaction_range_meters?: (number|null);
        }

        class FortSettings implements IFortSettings {
            constructor(properties?: POGOProtos.Settings.IFortSettings);
            public interaction_range_meters: number;
            public max_total_deployed_pokemon: number;
            public max_player_deployed_pokemon: number;
            public deploy_stamina_multiplier: number;
            public deploy_attack_multiplier: number;
            public far_interaction_range_meters: number;
            public static encode(message: POGOProtos.Settings.IFortSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.FortSettings;
            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.FortSettings;
            public static toObject(message: POGOProtos.Settings.FortSettings, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
            public toJSON(): [ 'object' ].<string, any>;
        }

        interface IGlobalSettings {
            fort_settings?: (POGOProtos.Settings.IFortSettings|null);
            map_settings?: (POGOProtos.Settings.IMapSettings|null);
            level_settings?: (POGOProtos.Settings.ILevelSettings|null);
            inventory_settings?: (POGOProtos.Settings.IInventorySettings|null);
            minimum_client_version?: (string|null);
        }

        class GlobalSettings implements IGlobalSettings {
            constructor(properties?: POGOProtos.Settings.IGlobalSettings);
            public fort_settings?: (POGOProtos.Settings.IFortSettings|null);
            public map_settings?: (POGOProtos.Settings.IMapSettings|null);
            public level_settings?: (POGOProtos.Settings.ILevelSettings|null);
            public inventory_settings?: (POGOProtos.Settings.IInventorySettings|null);
            public minimum_client_version: string;
            public static encode(message: POGOProtos.Settings.IGlobalSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.GlobalSettings;
            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.GlobalSettings;
            public static toObject(message: POGOProtos.Settings.GlobalSettings, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
            public toJSON(): [ 'object' ].<string, any>;
        }

        interface IInventorySettings {
            max_pokemon?: (number|null);
            max_bag_items?: (number|null);
            base_pokemon?: (number|null);
            base_bag_items?: (number|null);
            base_eggs?: (number|null);
        }

        class InventorySettings implements IInventorySettings {
            constructor(properties?: POGOProtos.Settings.IInventorySettings);
            public max_pokemon: number;
            public max_bag_items: number;
            public base_pokemon: number;
            public base_bag_items: number;
            public base_eggs: number;
            public static encode(message: POGOProtos.Settings.IInventorySettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.InventorySettings;
            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.InventorySettings;
            public static toObject(message: POGOProtos.Settings.InventorySettings, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
            public toJSON(): [ 'object' ].<string, any>;
        }

        interface ILevelSettings {
            trainer_cp_modifier?: (number|null);
            trainer_difficulty_modifier?: (number|null);
        }

        class LevelSettings implements ILevelSettings {
            constructor(properties?: POGOProtos.Settings.ILevelSettings);
            public trainer_cp_modifier: number;
            public trainer_difficulty_modifier: number;
            public static encode(message: POGOProtos.Settings.ILevelSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.LevelSettings;
            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.LevelSettings;
            public static toObject(message: POGOProtos.Settings.LevelSettings, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
            public toJSON(): [ 'object' ].<string, any>;
        }

        interface IMapSettings {
            pokemon_visible_range?: (number|null);
            poke_nav_range_meters?: (number|null);
            encounter_range_meters?: (number|null);
            get_map_objects_min_refresh_seconds?: (number|null);
            get_map_objects_max_refresh_seconds?: (number|null);
            get_map_objects_min_distance_meters?: (number|null);
            google_maps_api_key?: (string|null);
        }

        class MapSettings implements IMapSettings {
            constructor(properties?: POGOProtos.Settings.IMapSettings);
            public pokemon_visible_range: number;
            public poke_nav_range_meters: number;
            public encounter_range_meters: number;
            public get_map_objects_min_refresh_seconds: number;
            public get_map_objects_max_refresh_seconds: number;
            public get_map_objects_min_distance_meters: number;
            public google_maps_api_key: string;
            public static encode(message: POGOProtos.Settings.IMapSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.MapSettings;
            public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.MapSettings;
            public static toObject(message: POGOProtos.Settings.MapSettings, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
            public toJSON(): [ 'object' ].<string, any>;
        }

        namespace Master {

            interface IBadgeSettings {
                badge_type?: (POGOProtos.Enums.BadgeType|null);
                badge_rank?: (number|null);
                targets?: (number[]|null);
            }

            class BadgeSettings implements IBadgeSettings {
                constructor(properties?: POGOProtos.Settings.Master.IBadgeSettings);
                public badge_type: POGOProtos.Enums.BadgeType;
                public badge_rank: number;
                public targets: [ 'Array' ].<number>;
                public static encode(message: POGOProtos.Settings.Master.IBadgeSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.BadgeSettings;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.BadgeSettings;
                public static toObject(message: POGOProtos.Settings.Master.BadgeSettings, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface ICameraSettings {
                next_camera?: (string|null);
                interpolation?: (POGOProtos.Enums.CameraInterpolation[]|null);
                target_type?: (POGOProtos.Enums.CameraTarget[]|null);
                ease_in_speed?: (number[]|null);
                east_out_speed?: (number[]|null);
                duration_seconds?: (number[]|null);
                wait_seconds?: (number[]|null);
                transition_seconds?: (number[]|null);
                angle_degree?: (number[]|null);
                angle_offset_degree?: (number[]|null);
                pitch_degree?: (number[]|null);
                pitch_offset_degree?: (number[]|null);
                roll_degree?: (number[]|null);
                distance_meters?: (number[]|null);
                height_percent?: (number[]|null);
                vert_ctr_ratio?: (number[]|null);
            }

            class CameraSettings implements ICameraSettings {
                constructor(properties?: POGOProtos.Settings.Master.ICameraSettings);
                public next_camera: string;
                public interpolation: [ 'Array' ].<POGOProtos.Enums.CameraInterpolation>;
                public target_type: [ 'Array' ].<POGOProtos.Enums.CameraTarget>;
                public ease_in_speed: [ 'Array' ].<number>;
                public east_out_speed: [ 'Array' ].<number>;
                public duration_seconds: [ 'Array' ].<number>;
                public wait_seconds: [ 'Array' ].<number>;
                public transition_seconds: [ 'Array' ].<number>;
                public angle_degree: [ 'Array' ].<number>;
                public angle_offset_degree: [ 'Array' ].<number>;
                public pitch_degree: [ 'Array' ].<number>;
                public pitch_offset_degree: [ 'Array' ].<number>;
                public roll_degree: [ 'Array' ].<number>;
                public distance_meters: [ 'Array' ].<number>;
                public height_percent: [ 'Array' ].<number>;
                public vert_ctr_ratio: [ 'Array' ].<number>;
                public static encode(message: POGOProtos.Settings.Master.ICameraSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.CameraSettings;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.CameraSettings;
                public static toObject(message: POGOProtos.Settings.Master.CameraSettings, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IEncounterSettings {
                spin_bonus_threshold?: (number|null);
                excellent_throw_threshold?: (number|null);
                great_throw_threshold?: (number|null);
                nice_throw_threshold?: (number|null);
                milestone_threshold?: (number|null);
            }

            class EncounterSettings implements IEncounterSettings {
                constructor(properties?: POGOProtos.Settings.Master.IEncounterSettings);
                public spin_bonus_threshold: number;
                public excellent_throw_threshold: number;
                public great_throw_threshold: number;
                public nice_throw_threshold: number;
                public milestone_threshold: number;
                public static encode(message: POGOProtos.Settings.Master.IEncounterSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.EncounterSettings;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.EncounterSettings;
                public static toObject(message: POGOProtos.Settings.Master.EncounterSettings, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IEquippedBadgeSettings {
                equip_badge_cooldown_ms?: (number|Long|null);
                catch_probability_bonus?: (number[]|null);
                flee_probability_bonus?: (number[]|null);
            }

            class EquippedBadgeSettings implements IEquippedBadgeSettings {
                constructor(properties?: POGOProtos.Settings.Master.IEquippedBadgeSettings);
                public equip_badge_cooldown_ms: (number|Long);
                public catch_probability_bonus: [ 'Array' ].<number>;
                public flee_probability_bonus: [ 'Array' ].<number>;
                public static encode(message: POGOProtos.Settings.Master.IEquippedBadgeSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.EquippedBadgeSettings;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.EquippedBadgeSettings;
                public static toObject(message: POGOProtos.Settings.Master.EquippedBadgeSettings, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IGymBattleSettings {
                energy_per_sec?: (number|null);
                dodge_energy_cost?: (number|null);
                retarget_seconds?: (number|null);
                enemy_attack_interval?: (number|null);
                attack_server_interval?: (number|null);
                round_duration_seconds?: (number|null);
                bonus_time_per_ally_seconds?: (number|null);
                maximum_attackers_per_battle?: (number|null);
                same_type_attack_bonus_multiplier?: (number|null);
                maximum_energy?: (number|null);
                energy_delta_per_health_lost?: (number|null);
                dodge_duration_ms?: (number|null);
                minimum_player_level?: (number|null);
                swap_duration_ms?: (number|null);
            }

            class GymBattleSettings implements IGymBattleSettings {
                constructor(properties?: POGOProtos.Settings.Master.IGymBattleSettings);
                public energy_per_sec: number;
                public dodge_energy_cost: number;
                public retarget_seconds: number;
                public enemy_attack_interval: number;
                public attack_server_interval: number;
                public round_duration_seconds: number;
                public bonus_time_per_ally_seconds: number;
                public maximum_attackers_per_battle: number;
                public same_type_attack_bonus_multiplier: number;
                public maximum_energy: number;
                public energy_delta_per_health_lost: number;
                public dodge_duration_ms: number;
                public minimum_player_level: number;
                public swap_duration_ms: number;
                public static encode(message: POGOProtos.Settings.Master.IGymBattleSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.GymBattleSettings;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.GymBattleSettings;
                public static toObject(message: POGOProtos.Settings.Master.GymBattleSettings, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IGymLevelSettings {
                required_experience?: (number[]|null);
                leader_slots?: (number[]|null);
                trainer_slots?: (number[]|null);
                search_roll_bonus?: (number[]|null);
            }

            class GymLevelSettings implements IGymLevelSettings {
                constructor(properties?: POGOProtos.Settings.Master.IGymLevelSettings);
                public required_experience: [ 'Array' ].<number>;
                public leader_slots: [ 'Array' ].<number>;
                public trainer_slots: [ 'Array' ].<number>;
                public search_roll_bonus: [ 'Array' ].<number>;
                public static encode(message: POGOProtos.Settings.Master.IGymLevelSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.GymLevelSettings;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.GymLevelSettings;
                public static toObject(message: POGOProtos.Settings.Master.GymLevelSettings, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IIapItemDisplay {
                sku?: (string|null);
                category?: (POGOProtos.Enums.HoloIapItemCategory|null);
                sort_order?: (number|null);
                item_ids?: (POGOProtos.Inventory.ItemId[]|null);
                counts?: (number[]|null);
            }

            class IapItemDisplay implements IIapItemDisplay {
                constructor(properties?: POGOProtos.Settings.Master.IIapItemDisplay);
                public sku: string;
                public category: POGOProtos.Enums.HoloIapItemCategory;
                public sort_order: number;
                public item_ids: [ 'Array' ].<POGOProtos.Inventory.ItemId>;
                public counts: [ 'Array' ].<number>;
                public static encode(message: POGOProtos.Settings.Master.IIapItemDisplay, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.IapItemDisplay;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.IapItemDisplay;
                public static toObject(message: POGOProtos.Settings.Master.IapItemDisplay, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IIapSettings {
                daily_bonus_coins?: (number|null);
                daily_defender_bonus_per_pokemon?: (number[]|null);
                daily_defender_bonus_max_defenders?: (number|null);
                daily_defender_bonus_currency?: (string[]|null);
                min_time_between_claims_ms?: (number|Long|null);
                daily_bonus_enabled?: (boolean|null);
                daily_defender_bonus_enabled?: (boolean|null);
            }

            class IapSettings implements IIapSettings {
                constructor(properties?: POGOProtos.Settings.Master.IIapSettings);
                public daily_bonus_coins: number;
                public daily_defender_bonus_per_pokemon: [ 'Array' ].<number>;
                public daily_defender_bonus_max_defenders: number;
                public daily_defender_bonus_currency: [ 'Array' ].<string>;
                public min_time_between_claims_ms: (number|Long);
                public daily_bonus_enabled: boolean;
                public daily_defender_bonus_enabled: boolean;
                public static encode(message: POGOProtos.Settings.Master.IIapSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.IapSettings;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.IapSettings;
                public static toObject(message: POGOProtos.Settings.Master.IapSettings, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace Item {

                interface IBattleAttributes {
                    sta_percent?: (number|null);
                }

                class BattleAttributes implements IBattleAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Item.IBattleAttributes);
                    public sta_percent: number;
                    public static encode(message: POGOProtos.Settings.Master.Item.IBattleAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Item.BattleAttributes;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.Item.BattleAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Item.BattleAttributes, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IEggIncubatorAttributes {
                    incubator_type?: (POGOProtos.Inventory.EggIncubatorType|null);
                    uses?: (number|null);
                    distance_multiplier?: (number|null);
                }

                class EggIncubatorAttributes implements IEggIncubatorAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Item.IEggIncubatorAttributes);
                    public incubator_type: POGOProtos.Inventory.EggIncubatorType;
                    public uses: number;
                    public distance_multiplier: number;
                    public static encode(message: POGOProtos.Settings.Master.Item.IEggIncubatorAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Item.EggIncubatorAttributes;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.Item.EggIncubatorAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Item.EggIncubatorAttributes, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IExperienceBoostAttributes {
                    xp_multiplier?: (number|null);
                    boost_duration_ms?: (number|null);
                }

                class ExperienceBoostAttributes implements IExperienceBoostAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Item.IExperienceBoostAttributes);
                    public xp_multiplier: number;
                    public boost_duration_ms: number;
                    public static encode(message: POGOProtos.Settings.Master.Item.IExperienceBoostAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Item.ExperienceBoostAttributes;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.Item.ExperienceBoostAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Item.ExperienceBoostAttributes, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IFoodAttributes {
                    item_effect?: (POGOProtos.Enums.ItemEffect[]|null);
                    item_effect_percent?: (number[]|null);
                    growth_percent?: (number|null);
                }

                class FoodAttributes implements IFoodAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Item.IFoodAttributes);
                    public item_effect: [ 'Array' ].<POGOProtos.Enums.ItemEffect>;
                    public item_effect_percent: [ 'Array' ].<number>;
                    public growth_percent: number;
                    public static encode(message: POGOProtos.Settings.Master.Item.IFoodAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Item.FoodAttributes;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.Item.FoodAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Item.FoodAttributes, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IFortModifierAttributes {
                    modifier_lifetime_seconds?: (number|null);
                    troy_disk_num_pokemon_spawned?: (number|null);
                }

                class FortModifierAttributes implements IFortModifierAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Item.IFortModifierAttributes);
                    public modifier_lifetime_seconds: number;
                    public troy_disk_num_pokemon_spawned: number;
                    public static encode(message: POGOProtos.Settings.Master.Item.IFortModifierAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Item.FortModifierAttributes;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.Item.FortModifierAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Item.FortModifierAttributes, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IIncenseAttributes {
                    incense_lifetime_seconds?: (number|null);
                    pokemon_type?: (POGOProtos.Enums.PokemonType[]|null);
                    pokemon_incense_type_probability?: (number|null);
                    standing_time_between_encounters_seconds?: (number|null);
                    moving_time_between_encounter_seconds?: (number|null);
                    distance_required_for_shorter_interval_meters?: (number|null);
                    pokemon_attracted_length_sec?: (number|null);
                }

                class IncenseAttributes implements IIncenseAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Item.IIncenseAttributes);
                    public incense_lifetime_seconds: number;
                    public pokemon_type: [ 'Array' ].<POGOProtos.Enums.PokemonType>;
                    public pokemon_incense_type_probability: number;
                    public standing_time_between_encounters_seconds: number;
                    public moving_time_between_encounter_seconds: number;
                    public distance_required_for_shorter_interval_meters: number;
                    public pokemon_attracted_length_sec: number;
                    public static encode(message: POGOProtos.Settings.Master.Item.IIncenseAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Item.IncenseAttributes;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.Item.IncenseAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Item.IncenseAttributes, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IInventoryUpgradeAttributes {
                    additional_storage?: (number|null);
                    upgrade_type?: (POGOProtos.Inventory.InventoryUpgradeType|null);
                }

                class InventoryUpgradeAttributes implements IInventoryUpgradeAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Item.IInventoryUpgradeAttributes);
                    public additional_storage: number;
                    public upgrade_type: POGOProtos.Inventory.InventoryUpgradeType;
                    public static encode(message: POGOProtos.Settings.Master.Item.IInventoryUpgradeAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Item.InventoryUpgradeAttributes;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.Item.InventoryUpgradeAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Item.InventoryUpgradeAttributes, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IPokeballAttributes {
                    item_effect?: (POGOProtos.Enums.ItemEffect|null);
                    capture_multi?: (number|null);
                    capture_multi_effect?: (number|null);
                    item_effect_mod?: (number|null);
                }

                class PokeballAttributes implements IPokeballAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Item.IPokeballAttributes);
                    public item_effect: POGOProtos.Enums.ItemEffect;
                    public capture_multi: number;
                    public capture_multi_effect: number;
                    public item_effect_mod: number;
                    public static encode(message: POGOProtos.Settings.Master.Item.IPokeballAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Item.PokeballAttributes;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.Item.PokeballAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Item.PokeballAttributes, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IPotionAttributes {
                    sta_percent?: (number|null);
                    sta_amount?: (number|null);
                }

                class PotionAttributes implements IPotionAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Item.IPotionAttributes);
                    public sta_percent: number;
                    public sta_amount: number;
                    public static encode(message: POGOProtos.Settings.Master.Item.IPotionAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Item.PotionAttributes;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.Item.PotionAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Item.PotionAttributes, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IReviveAttributes {
                    sta_percent?: (number|null);
                }

                class ReviveAttributes implements IReviveAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Item.IReviveAttributes);
                    public sta_percent: number;
                    public static encode(message: POGOProtos.Settings.Master.Item.IReviveAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Item.ReviveAttributes;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.Item.ReviveAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Item.ReviveAttributes, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }
            }

            interface IItemSettings {
                item_id?: (POGOProtos.Inventory.ItemId|null);
                item_type?: (POGOProtos.Inventory.ItemType|null);
                category?: (POGOProtos.Enums.ItemCategory|null);
                drop_freq?: (number|null);
                drop_trainer_level?: (number|null);
                pokeball?: (POGOProtos.Settings.Master.Item.IPokeballAttributes|null);
                potion?: (POGOProtos.Settings.Master.Item.IPotionAttributes|null);
                revive?: (POGOProtos.Settings.Master.Item.IReviveAttributes|null);
                battle?: (POGOProtos.Settings.Master.Item.IBattleAttributes|null);
                food?: (POGOProtos.Settings.Master.Item.IFoodAttributes|null);
                inventory_upgrade?: (POGOProtos.Settings.Master.Item.IInventoryUpgradeAttributes|null);
                xp_boost?: (POGOProtos.Settings.Master.Item.IExperienceBoostAttributes|null);
                incense?: (POGOProtos.Settings.Master.Item.IIncenseAttributes|null);
                egg_incubator?: (POGOProtos.Settings.Master.Item.IEggIncubatorAttributes|null);
                fort_modifier?: (POGOProtos.Settings.Master.Item.IFortModifierAttributes|null);
            }

            class ItemSettings implements IItemSettings {
                constructor(properties?: POGOProtos.Settings.Master.IItemSettings);
                public item_id: POGOProtos.Inventory.ItemId;
                public item_type: POGOProtos.Inventory.ItemType;
                public category: POGOProtos.Enums.ItemCategory;
                public drop_freq: number;
                public drop_trainer_level: number;
                public pokeball?: (POGOProtos.Settings.Master.Item.IPokeballAttributes|null);
                public potion?: (POGOProtos.Settings.Master.Item.IPotionAttributes|null);
                public revive?: (POGOProtos.Settings.Master.Item.IReviveAttributes|null);
                public battle?: (POGOProtos.Settings.Master.Item.IBattleAttributes|null);
                public food?: (POGOProtos.Settings.Master.Item.IFoodAttributes|null);
                public inventory_upgrade?: (POGOProtos.Settings.Master.Item.IInventoryUpgradeAttributes|null);
                public xp_boost?: (POGOProtos.Settings.Master.Item.IExperienceBoostAttributes|null);
                public incense?: (POGOProtos.Settings.Master.Item.IIncenseAttributes|null);
                public egg_incubator?: (POGOProtos.Settings.Master.Item.IEggIncubatorAttributes|null);
                public fort_modifier?: (POGOProtos.Settings.Master.Item.IFortModifierAttributes|null);
                public static encode(message: POGOProtos.Settings.Master.IItemSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.ItemSettings;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.ItemSettings;
                public static toObject(message: POGOProtos.Settings.Master.ItemSettings, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IMoveSequenceSettings {
                sequence?: (string[]|null);
            }

            class MoveSequenceSettings implements IMoveSequenceSettings {
                constructor(properties?: POGOProtos.Settings.Master.IMoveSequenceSettings);
                public sequence: [ 'Array' ].<string>;
                public static encode(message: POGOProtos.Settings.Master.IMoveSequenceSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.MoveSequenceSettings;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.MoveSequenceSettings;
                public static toObject(message: POGOProtos.Settings.Master.MoveSequenceSettings, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IMoveSettings {
                movement_id?: (POGOProtos.Enums.PokemonMovementType|null);
                animation_id?: (number|null);
                pokemon_type?: (POGOProtos.Enums.PokemonType|null);
                power?: (number|null);
                accuracy_chance?: (number|null);
                critical_chance?: (number|null);
                heal_scalar?: (number|null);
                stamina_loss_scalar?: (number|null);
                trainer_level_min?: (number|null);
                trainer_level_max?: (number|null);
                vfx_name?: (string|null);
                duration_ms?: (number|null);
                damage_window_start_ms?: (number|null);
                damage_window_end_ms?: (number|null);
                energy_delta?: (number|null);
            }

            class MoveSettings implements IMoveSettings {
                constructor(properties?: POGOProtos.Settings.Master.IMoveSettings);
                public movement_id: POGOProtos.Enums.PokemonMovementType;
                public animation_id: number;
                public pokemon_type: POGOProtos.Enums.PokemonType;
                public power: number;
                public accuracy_chance: number;
                public critical_chance: number;
                public heal_scalar: number;
                public stamina_loss_scalar: number;
                public trainer_level_min: number;
                public trainer_level_max: number;
                public vfx_name: string;
                public duration_ms: number;
                public damage_window_start_ms: number;
                public damage_window_end_ms: number;
                public energy_delta: number;
                public static encode(message: POGOProtos.Settings.Master.IMoveSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.MoveSettings;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.MoveSettings;
                public static toObject(message: POGOProtos.Settings.Master.MoveSettings, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IPlayerLevelSettings {
                rank_num?: (number[]|null);
                required_experience?: (number[]|null);
                cp_multiplier?: (number[]|null);
                max_egg_player_level?: (number|null);
                max_encounter_player_level?: (number|null);
            }

            class PlayerLevelSettings implements IPlayerLevelSettings {
                constructor(properties?: POGOProtos.Settings.Master.IPlayerLevelSettings);
                public rank_num: [ 'Array' ].<number>;
                public required_experience: [ 'Array' ].<number>;
                public cp_multiplier: [ 'Array' ].<number>;
                public max_egg_player_level: number;
                public max_encounter_player_level: number;
                public static encode(message: POGOProtos.Settings.Master.IPlayerLevelSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.PlayerLevelSettings;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.PlayerLevelSettings;
                public static toObject(message: POGOProtos.Settings.Master.PlayerLevelSettings, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            namespace Pokemon {

                interface ICameraAttributes {
                    disk_radius_m?: (number|null);
                    cylinder_radius_m?: (number|null);
                    cylinder_height_m?: (number|null);
                    cylinder_ground_m?: (number|null);
                    shoulder_mode_scale?: (number|null);
                }

                class CameraAttributes implements ICameraAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Pokemon.ICameraAttributes);
                    public disk_radius_m: number;
                    public cylinder_radius_m: number;
                    public cylinder_height_m: number;
                    public cylinder_ground_m: number;
                    public shoulder_mode_scale: number;
                    public static encode(message: POGOProtos.Settings.Master.Pokemon.ICameraAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Pokemon.CameraAttributes;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.Pokemon.CameraAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Pokemon.CameraAttributes, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IEncounterAttributes {
                    base_capture_rate?: (number|null);
                    base_flee_rate?: (number|null);
                    collision_radius_m?: (number|null);
                    collision_height_m?: (number|null);
                    collision_head_radius_m?: (number|null);
                    movement_type?: (POGOProtos.Enums.PokemonMovementType|null);
                    movement_timer_s?: (number|null);
                    jump_time_s?: (number|null);
                    attack_timer_s?: (number|null);
                }

                class EncounterAttributes implements IEncounterAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Pokemon.IEncounterAttributes);
                    public base_capture_rate: number;
                    public base_flee_rate: number;
                    public collision_radius_m: number;
                    public collision_height_m: number;
                    public collision_head_radius_m: number;
                    public movement_type: POGOProtos.Enums.PokemonMovementType;
                    public movement_timer_s: number;
                    public jump_time_s: number;
                    public attack_timer_s: number;
                    public static encode(message: POGOProtos.Settings.Master.Pokemon.IEncounterAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Pokemon.EncounterAttributes;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.Pokemon.EncounterAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Pokemon.EncounterAttributes, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }

                interface IStatsAttributes {
                    base_stamina?: (number|null);
                    base_attack?: (number|null);
                    base_defense?: (number|null);
                    dodge_energy_delta?: (number|null);
                }

                class StatsAttributes implements IStatsAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Pokemon.IStatsAttributes);
                    public base_stamina: number;
                    public base_attack: number;
                    public base_defense: number;
                    public dodge_energy_delta: number;
                    public static encode(message: POGOProtos.Settings.Master.Pokemon.IStatsAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Pokemon.StatsAttributes;
                    public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.Pokemon.StatsAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Pokemon.StatsAttributes, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                    public toJSON(): [ 'object' ].<string, any>;
                }
            }

            interface IPokemonSettings {
                pokemon_id?: (POGOProtos.Enums.PokemonId|null);
                model_scale?: (number|null);
                type?: (POGOProtos.Enums.PokemonType|null);
                type_2?: (POGOProtos.Enums.PokemonType|null);
                camera?: (POGOProtos.Settings.Master.Pokemon.ICameraAttributes|null);
                encounter?: (POGOProtos.Settings.Master.Pokemon.IEncounterAttributes|null);
                stats?: (POGOProtos.Settings.Master.Pokemon.IStatsAttributes|null);
                quick_moves?: (POGOProtos.Enums.PokemonMove[]|null);
                cinematic_moves?: (POGOProtos.Enums.PokemonMove[]|null);
                animation_time?: (number[]|null);
                evolution_ids?: (POGOProtos.Enums.PokemonId[]|null);
                evolution_pips?: (number|null);
                "class"?: (POGOProtos.Enums.PokemonClass|null);
                pokedex_height_m?: (number|null);
                pokedex_weight_kg?: (number|null);
                parent_pokemon_id?: (POGOProtos.Enums.PokemonId|null);
                height_std_dev?: (number|null);
                weight_std_dev?: (number|null);
                km_distance_to_hatch?: (number|null);
                family_id?: (POGOProtos.Enums.PokemonFamilyId|null);
                candy_to_evolve?: (number|null);
            }

            class PokemonSettings implements IPokemonSettings {
                constructor(properties?: POGOProtos.Settings.Master.IPokemonSettings);
                public pokemon_id: POGOProtos.Enums.PokemonId;
                public model_scale: number;
                public type: POGOProtos.Enums.PokemonType;
                public type_2: POGOProtos.Enums.PokemonType;
                public camera?: (POGOProtos.Settings.Master.Pokemon.ICameraAttributes|null);
                public encounter?: (POGOProtos.Settings.Master.Pokemon.IEncounterAttributes|null);
                public stats?: (POGOProtos.Settings.Master.Pokemon.IStatsAttributes|null);
                public quick_moves: [ 'Array' ].<POGOProtos.Enums.PokemonMove>;
                public cinematic_moves: [ 'Array' ].<POGOProtos.Enums.PokemonMove>;
                public animation_time: [ 'Array' ].<number>;
                public evolution_ids: [ 'Array' ].<POGOProtos.Enums.PokemonId>;
                public evolution_pips: number;
                public class: POGOProtos.Enums.PokemonClass;
                public pokedex_height_m: number;
                public pokedex_weight_kg: number;
                public parent_pokemon_id: POGOProtos.Enums.PokemonId;
                public height_std_dev: number;
                public weight_std_dev: number;
                public km_distance_to_hatch: number;
                public family_id: POGOProtos.Enums.PokemonFamilyId;
                public candy_to_evolve: number;
                public static encode(message: POGOProtos.Settings.Master.IPokemonSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.PokemonSettings;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.PokemonSettings;
                public static toObject(message: POGOProtos.Settings.Master.PokemonSettings, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface IPokemonUpgradeSettings {
                upgrades_per_level?: (number|null);
                allowed_levels_above_player?: (number|null);
                candy_cost?: (number[]|null);
                stardust_cost?: (number[]|null);
            }

            class PokemonUpgradeSettings implements IPokemonUpgradeSettings {
                constructor(properties?: POGOProtos.Settings.Master.IPokemonUpgradeSettings);
                public upgrades_per_level: number;
                public allowed_levels_above_player: number;
                public candy_cost: [ 'Array' ].<number>;
                public stardust_cost: [ 'Array' ].<number>;
                public static encode(message: POGOProtos.Settings.Master.IPokemonUpgradeSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.PokemonUpgradeSettings;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.PokemonUpgradeSettings;
                public static toObject(message: POGOProtos.Settings.Master.PokemonUpgradeSettings, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }

            interface ITypeEffectiveSettings {
                attack_scalar?: (number[]|null);
                attack_type?: (POGOProtos.Enums.PokemonType|null);
            }

            class TypeEffectiveSettings implements ITypeEffectiveSettings {
                constructor(properties?: POGOProtos.Settings.Master.ITypeEffectiveSettings);
                public attack_scalar: [ 'Array' ].<number>;
                public attack_type: POGOProtos.Enums.PokemonType;
                public static encode(message: POGOProtos.Settings.Master.ITypeEffectiveSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.TypeEffectiveSettings;
                public static fromObject(object: [ 'object' ].<string, any>): POGOProtos.Settings.Master.TypeEffectiveSettings;
                public static toObject(message: POGOProtos.Settings.Master.TypeEffectiveSettings, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;
                public toJSON(): [ 'object' ].<string, any>;
            }
        }
    }
}
